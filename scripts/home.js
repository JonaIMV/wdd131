const yearSpan = document.querySelector("#year");
const lastModSpan = document.querySelector("#lastModified");

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

if (lastModSpan) {
  lastModSpan.textContent = `Last modified: ${document.lastModified}`;
}