document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("capture-btn");

  btn.addEventListener("click", async () => {
    const result = await window.electronAPI.captureScreen();
    console.log(result);
  });
});
