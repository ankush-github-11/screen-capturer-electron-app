const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  captureScreen: () => ipcRenderer.send("capture-screen"),
});

window.addEventListener("DOMContentLoaded", () => {
  console.log("Preload loaded");
});