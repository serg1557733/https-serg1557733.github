const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click',() => {
    menu.classList.add('active')
    hamburger.classList.add('hamburger_active')
});
closeElem.addEventListener('click',() => {
    menu.classList.remove('active')
    hamburger.classList.remove('hamburger_active')
});
