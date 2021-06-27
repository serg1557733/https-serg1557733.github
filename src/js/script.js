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
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });


    const form = document.getElementById('form');
    form.addEventListener('submit',formSend);

    async function formSend(e) {
        e.preventDefault();
      /*   console.log(FormData('form'));
        let formData = form.dataset;  */
        let response = await fetch('sendmail.php', {
            method: 'POST',
           /*  body: formData */
        });
        if (response.ok) {
            let result = await response.json();
            alert (result.messsage);
            form.reset();
        }
        else {console.log('error send')
    };
    };
});

const overlay = document.querySelector('.overlay');
const formSend = document.querySelector('.contacts__btn');
formSend.addEventListener('click',() => {
    overlay.classList.add('overlay_active')
});

document.addEventListener('scroll',()=>{
    overlay.classList.remove('overlay_active')
});
