document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  const yearSpan = document.querySelector("#year");
  const lastModSpan = document.querySelector("#lastModified");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("show");
    });
  }

  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  if (lastModSpan) {
    lastModSpan.textContent = `Last modified: ${document.lastModified}`;
  }
});
