//Variables
const toggleMenu = document.getElementById('btn-menu');
const menu = document.querySelector('.menu');

//Event Listener
toggleMenu.addEventListener('click', burgerMenu);

//Funtions
function burgerMenu(e){
   menu.classList.toggle('menu-open');

}