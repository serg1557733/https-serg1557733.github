//hamburger menu activation classes
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

//auto progress bar width 
const skillsCounter = document.querySelectorAll('.skills__counter');
const skillsBar = document.querySelectorAll('.skills__progress-status span');

skillsCounter.forEach((item, i) => {
    skillsBar[i].style.width = item.textContent;
});

//slow-scroll script 
$(document).ready(function(){
    $("#btns").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});