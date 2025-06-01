
function calculateWindChill(tempC, windKmh) {
  return (
    13.12 +
    0.6215 * tempC -
    11.37 * Math.pow(windKmh, 0.16) +
    0.3965 * tempC * Math.pow(windKmh, 0.16)
  ).toFixed(1);
}


const temperature = 30; 
const windSpeed = 15; 

const windChillElement = document.getElementById("windchill");

if (temperature <= 10 && windSpeed > 4.8) {
  windChillElement.textContent = `${calculateWindChill(temperature, windSpeed)}°C`;
} else {
  windChillElement.textContent = "N/A";
}


document.getElementById("year").textContent = new Date().getFullYear();


document.getElementById("lastModified").textContent = `Last modified: ${document.lastModified}`;
