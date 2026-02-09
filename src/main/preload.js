const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  captureScreen: () => ipcRenderer.send("hello"),
});

window.addEventListener("DOMContentLoaded", () => {
  console.log("Preload loaded");
});