document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("capture-btn");

  btn.addEventListener("click", () => {
    window.electronAPI.captureScreen();
  });
});
