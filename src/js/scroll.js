document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("scrollBtn").addEventListener("click", () => {
    document.getElementById("targetDiv").scrollIntoView({ behavior: "smooth" });
  });
});
