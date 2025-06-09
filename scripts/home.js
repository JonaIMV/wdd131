document.getElementById("menu-toggle").addEventListener("click", function () {
  const menu = document.getElementById("nav-menu");
  menu.classList.toggle("show");
});
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last modified: ${document.lastModified}`;