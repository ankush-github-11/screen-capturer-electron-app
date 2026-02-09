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

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
    },
  });

  mainWindow.loadFile(path.join(__dirname, "../renderer/index.html"));
};

ipcMain.handle("capture-screen", async () => {
  if (mainWindow) {
    mainWindow.hide();
  }

  await new Promise((resolve) => setTimeout(resolve, 300));

  const sources = await desktopCapturer.getSources({
    types: ["screen"],
    thumbnailSize: { width: 1920, height: 1080 },
  });

  const screen = sources[0];
  const timestamp = getTimestamp();

  const { filePath } = await dialog.showSaveDialog({
    title: "Save Screenshot",
    defaultPath: `screenshot_${timestamp}.png`,
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
