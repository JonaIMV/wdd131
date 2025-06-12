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

  
  if (
    document.getElementById("toros-gallery-container") &&
    document.getElementById("coach-gallery-container")
  ) {
    const torosImages = [
      { src: "images/rugby1.jpg", alt: "Toros en partido" },
      { src: "images/rugby2.jpg", alt: "Jugadores entrenando" },
      { src: "images/rugby3.jpg", alt: "Celebrando la victoria" },
      { src: "images/rugby4.jpg", alt: "Toros en la cancha" }
    ];

    const coachImages = [
      { src: "images/coach1.jpeg", alt: "Coach en entrenamiento" },
      { src: "images/coach2.jpeg", alt: "Coach dando instrucciones" },
      { src: "images/coach3.jpeg", alt: "Coach en entrenamiento" },
      { src: "images/coach4.jpeg", alt: "Coach en entrenamiento" }
    ];

    function createGallery(containerId, images) {
      const container = document.getElementById(containerId);
      images.forEach((image, index) => {
        const img = document.createElement("img");
        img.src = image.src;
        img.alt = image.alt;
        img.loading = "lazy";

        
        img.classList.add("fade-in");
        if (index === 0) {
          img.classList.add("hover-zoom");
        }

        container.appendChild(img);
      });
    }

    function setupStackGallery(containerId) {
      const container = document.getElementById(containerId);
      if (container) {
        container.addEventListener("click", () => {
          container.classList.toggle("expanded");
        });
      }
    }

    
    createGallery("toros-gallery-container", torosImages);
    createGallery("coach-gallery-container", coachImages);

    setupStackGallery("toros-gallery-container");
    setupStackGallery("coach-gallery-container");
  }
});


