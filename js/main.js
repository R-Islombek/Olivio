const menuToggle = document.getElementById('menuToggle');
const nav = document.querySelector('.header-list');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});