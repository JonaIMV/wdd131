const currentyear = new Date().getFullYear
document.getElementById("year").textContent = { currentyear };
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;
