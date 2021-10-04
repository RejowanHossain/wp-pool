// responsive toggle menu

const hamburgerMenu = document.getElementById('toggleMenu');
const mobileMenu = document.getElementById('mobileMenu');


hamburgerMenu.addEventListener('click', function() {
    mobileMenu.classList.toggle('responsive-menu')

})