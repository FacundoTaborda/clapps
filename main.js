const hamburgerMenu = document.querySelector('.header-menu');
const modalNavbar = document.querySelector('.back-navbar');
const closeModalNavbar = document.querySelector('.close-icon');

modalNavbar.style.display = 'none'

hamburgerMenu.addEventListener('click', ()=>{
    console.log('abrir modal');
    modalNavbar.style.display = 'block';
});

closeModalNavbar.addEventListener('click', ()=>{
    modalNavbar.style.display = 'none';
});




