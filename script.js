const carouselContainer = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.carousel-slide');
let currentIndex = 0;
const slideInterval = 3000; // Time in milliseconds (3 seconds)
const totalSlides = slides.length;

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; // Move to the next slide index, loop back to 0
    updateCarousel();
}

function updateCarousel() {
    const translateValue = -currentIndex * 100 + '%'; // Calculate how much to move the container
    carouselContainer.style.transform = 'translateX(' + translateValue + ')'; // Apply the translation
}

// Start the automatic slideshow
setInterval(nextSlide, slideInterval);