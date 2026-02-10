const { app, BrowserWindow, ipcMain, desktopCapturer, dialog } = require("electron");
const fs = require("fs");
const path = require("path");

let mainWindow;

function getTimestamp() {
  const now = new Date();
  return now
    .toISOString()
    .replace(/T/, "_")
    .replace(/:/g, "-")
    .replace(/\..+/, "");
}

function resolveAppPath(...segments) {
  // In production, app.getAppPath() returns the asar archive path
  // In development, it returns the project root
  return path.join(app.getAppPath(), ...segments);
}

function loadFile(filePath) {
  const isDev = !app.isPackaged;
  let file;
  
  if (isDev) {
    file = path.join(__dirname, "../../", filePath);
  } else {
    file = resolveAppPath(filePath);
  }
  
  return `file://${file.replace(/\\/g, "/")}`;
}

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: true,

    icon: path.join(__dirname, "../../assets/icon.ico"),

    webPreferences: {
      preload: resolveAppPath("src", "main", "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: false,
    },
  });

  const indexPath = path.join(__dirname, "../../src/renderer/index.html");
  mainWindow.loadFile(indexPath);
};

ipcMain.handle("capture-screen", async () => {
  if (mainWindow) mainWindow.hide();

  await new Promise((resolve) => setTimeout(resolve, 300));

  const sources = await desktopCapturer.getSources({
    types: ["screen"],
    thumbnailSize: { width: 1920, height: 1080 },
  });

  const screen = sources[0];
  const timestamp = getTimestamp();

  const { filePath } = await dialog.showSaveDialog({
    title: "Save Screenshot",
    defaultPath: path.join(
      app.getPath("pictures"),
      `screenshot_${timestamp}.png`
    ),
  });

  if (!filePath) {
    mainWindow.show();
    return { canceled: true };
  }

  await fs.promises.writeFile(filePath, screen.thumbnail.toPNG());

  mainWindow.show();

  return { success: true, path: filePath };
});

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
