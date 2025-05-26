document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// menú responsivo
document.getElementById("menu").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("show");
});