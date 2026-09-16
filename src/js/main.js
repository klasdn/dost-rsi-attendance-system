document.addEventListener("DOMContentLoaded", () => {
 const slides = document.querySelectorAll(".slide");
 let currentSlide = 0;
 const slideInterval = 5000; // Change image every 5 seconds

 function nextSlide() {
  // Hide current slide
  slides[currentSlide].classList.remove("opacity-100");
  slides[currentSlide].classList.add("opacity-0");

  // Advance index
  currentSlide = (currentSlide + 1) % slides.length;

  // Show next slide
  slides[currentSlide].classList.remove("opacity-0");
  slides[currentSlide].classList.add("opacity-100");
 }

 setInterval(nextSlide, slideInterval);
});
