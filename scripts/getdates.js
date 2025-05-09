const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = `© ${currentYear}`;
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;
