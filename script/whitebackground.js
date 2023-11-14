// Seleziona l'elemento header
const header = document.querySelector('header');

// Gestisci lo scroll dell'header
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Seleziona l'elemento del logo bianco
const logoWhite = document.querySelector('.logo-white');

// Gestisci la visibilità del logo bianco
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
        logoWhite.style.display = 'block';
    } else {
        header.classList.remove('scrolled');
        logoWhite.style.display = 'none';
    }
});
