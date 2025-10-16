// Update copyright year
document.getElementById("year").textContent = new Date().getFullYear();

// Optional smooth fade for page load
window.addEventListener("load", () => {
  document.body.style.opacity = 1;
  document.body.style.transition = "opacity 0.6s ease";
});
