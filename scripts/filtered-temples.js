document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// menú responsivo
document.getElementById("menu").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("show");
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
  {
    templeName: "Veracruz México",
    location: "Veracruz, México",
    dedicated: "2000, July, 9",
    area: 10700,
    imageUrl:"https://www.churchofjesuschrist.org/imgs/48446444a7b8d2d2aebe3e3cfc2706d7b026a464/full/320%2C/0/default"
  },
  {
    templeName: "Okinawa Japan",
    location: "Okinawa, Japan",
    dedicated: "2023, November, 12",
    area: 12437,
    imageUrl:"https://www.churchofjesuschrist.org/imgs/8d03a863202511eeaf55eeeeac1eaac5f5ab9bd4/full/320%2C/0/default"
  },
  {
    templeName: "San Diego California",
    location: "San Diego, California, United States",
    dedicated: "1993, April, 25",
    area: 72000,
    imageUrl:"https://www.churchofjesuschrist.org/imgs/4a0d917c90492f259a7a1124c1feaca9739c1853/full/320%2C/0/default"
  },
  {
    templeName: "Salt Lake City Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 382207,
    imageUrl:"https://www.churchofjesuschrist.org/imgs/5d6ba417171e3357c93b2546d013dc21a04a943d/full/320%2C/0/default"
  }
];


const templeContainer = document.getElementById("temple-container");


function displayTemples(filter) {
    
    templeContainer.innerHTML = "";

    
    let filteredTemples = temples;

    if (filter === "old") {
        filteredTemples = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) < 1900);
    } else if (filter === "new") {
        filteredTemples = temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) > 2000);
    } else if (filter === "large") {
        filteredTemples = temples.filter(temple => temple.area > 90000);
    } else if (filter === "small") {
        filteredTemples = temples.filter(temple => temple.area < 10000);
    }

    
    filteredTemples.forEach(temple => {
        const templeCard = document.createElement("div");
        templeCard.classList.add("temple-card");

        templeCard.innerHTML = `
            <h2>${temple.templeName}</h2>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated on:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area} square feet</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        `;

        templeContainer.appendChild(templeCard);
    });
}


document.getElementById("home").addEventListener("click", () => displayTemples("home"));
document.getElementById("old").addEventListener("click", () => displayTemples("old"));
document.getElementById("new").addEventListener("click", () => displayTemples("new"));
document.getElementById("large").addEventListener("click", () => displayTemples("large"));
document.getElementById("small").addEventListener("click", () => displayTemples("small"));


displayTemples("home");

console.log("Filter selected:", filter);
console.log("Filtered temples:", filteredTemples);
