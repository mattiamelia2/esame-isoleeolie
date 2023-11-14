document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".immaginesfondo");
    let currentSlide = 0;

    function showSlide(n) {
        slides[currentSlide].style.display = "none";
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].style.display = "block";
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    // Mostra la prima immagine
    showSlide(0);

    // Imposta l'intervallo per cambiare slide ogni 4,5 secondi
    setInterval(nextSlide, 6000);
});


function toggleMenu() {
    var mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.style.display = (mobileMenu.style.display === 'none' || mobileMenu.style.display === '') ? 'block' : 'none';
}
