document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.querySelector('.hamburger-menu');
    var menuMobile = document.querySelector('.menu-mobile');
    var menuItems = document.querySelectorAll('.menu-mobile > ul > li');
    var menuSpans = document.querySelectorAll('.menu-mobile .vocemenusingola'); 

    // Gestisci il click sul menu a hamburger
    hamburger.addEventListener('click', function() {
        this.classList.toggle('attivo'); // Aggiungi o rimuovi la classe 'attivo'
        menuMobile.classList.toggle('active'); // Aggiungi o rimuovi la classe 'active'
    });

    // Aggiungi il pulsante di ritorno e gestisci il click su ogni voce di menu con un sottomenu
    menuItems.forEach(function(item) {
        var subMenu = item.querySelector('ul');
        if (subMenu) {
            var backButton = document.createElement('li');
            backButton.innerHTML = '<a href="#">← Indietro</a>';
            backButton.classList.add('back-button');
            subMenu.insertBefore(backButton, subMenu.firstChild);

            item.addEventListener('click', function(e) {
                e.stopPropagation();
                showSubMenu(item); // Mostra il sottomenu
            });

            backButton.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                resetMainMenu();
                subMenu.classList.remove('active'); // Rimuovi la classe 'active' dal sottomenu
            });
        }
    });

    // Gestisci il click fuori dal menu per chiuderlo
    document.addEventListener('click', function(e) {
        var isClickInsideMenu = menuMobile.contains(e.target) || hamburger.contains(e.target);
        if (!isClickInsideMenu) {
            menuMobile.classList.remove('active');
            hamburger.classList.remove('attivo'); // Rimuovi la classe 'attivo' dal hamburger
            resetMainMenu();
        }
    });

    // Funzione per mostrare il sottomenu
    function showSubMenu(item) {
        var subMenu = item.querySelector('ul');
        if(subMenu){
            subMenu.classList.add('active'); // Aggiungi la classe 'active' al sottomenu
        }

        menuItems.forEach(function(el) {
            if (el !== item) {
                el.style.display = 'none'; // Nasconde gli altri elementi
            }
        });

        menuSpans.forEach(function(span) {
            span.style.visibility = 'hidden'; // Nasconde gli span
        });
    }

    // Funzione per resettare il menu principale
    function resetMainMenu() {
        menuItems.forEach(function(item) {
            item.style.display = 'block'; // Mostra tutti gli elementi
            var subMenu = item.querySelector('ul');
            if (subMenu) {
                subMenu.classList.remove('active'); // Rimuovi la classe 'active' dal sottomenu
            }
        });

        menuSpans.forEach(function(span) {
            span.style.visibility = 'visible'; // Mostra nuovamente gli span
        });
    }
});

// JAVA SCRIPT SLIDER //
document.addEventListener('DOMContentLoaded', function() {
    var slider = document.querySelector('.slider-container');
    var isDown = false;
    var startX;
    var scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        var x = e.pageX - slider.offsetLeft;
        var walk = (x - startX) * 3; // Il fattore 3 determina la velocità dello scorrimento
        slider.scrollLeft = scrollLeft - walk;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var slider4 = document.querySelector('.slider-container4');
    var isDown = false;
    var startX;
    var scrollLeft;

    slider4.addEventListener('mousedown', (e) => {
        isDown = true;
        slider4.classList.add('active');
        startX = e.pageX - slider4.offsetLeft;
        scrollLeft = slider4.scrollLeft;
    });

    slider4.addEventListener('mouseleave', () => {
        isDown = false;
        slider4.classList.remove('active');
    });

    slider4.addEventListener('mouseup', () => {
        isDown = false;
        slider4.classList.remove('active');
    });

    slider4.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        var x = e.pageX - slider4.offsetLeft;
        var walk = (x - startX) * 3; // Il fattore 3 determina la velocità dello scorrimento
        slider4.scrollLeft = scrollLeft - walk;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var sliderIsole5 = document.querySelector('.slider-containerisole5');
    var isDown = false;
    var startX;
    var scrollLeft;

    function startDragging(e) {
        isDown = true;
        sliderIsole5.classList.add('active');
        startX = (e.pageX || e.touches[0].pageX) - sliderIsole5.offsetLeft;
        scrollLeft = sliderIsole5.scrollLeft;
    }

    function stopDragging() {
        isDown = false;
        sliderIsole5.classList.remove('active');
    }

    function moveSlider(e) {
        if (!isDown) return;
        e.preventDefault();
        var x = (e.pageX || e.touches[0].pageX) - sliderIsole5.offsetLeft;
        var walk = (x - startX) * 3;
        sliderIsole5.scrollLeft = scrollLeft - walk;
    }

    // Eventi Mouse
    sliderIsole5.addEventListener('mousedown', startDragging);
    sliderIsole5.addEventListener('mouseleave', stopDragging);
    sliderIsole5.addEventListener('mouseup', stopDragging);
    sliderIsole5.addEventListener('mousemove', moveSlider);

    // Eventi Touch
    sliderIsole5.addEventListener('touchstart', startDragging);
    sliderIsole5.addEventListener('touchend', stopDragging);
    sliderIsole5.addEventListener('touchmove', moveSlider);
});







