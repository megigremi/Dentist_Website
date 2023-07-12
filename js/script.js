
//Kemi krijuar 4 variabla te cilat do te mbajne konkretisht butonin e menus ,
// navigim bar , butonin per about, dhe butonin e kontaktit
let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .navbar");

//do merret id e butonit te kontaktit dhe me pas do i shtohet eventlistener per ta ber aktiv ne momentin
//qe klikohet dhe do te hapet nje faqe e re ku do na zhvendosi te faqa kontakt.
const contactBtn = document.getElementById('contact-btn');
contactBtn.addEventListener('click', () => {
  window.location.href = 'contact.html';
});
//e njejta situat eshte dhe per butonin about ku kemi marr id e tij dhe 
// i kemi shktuar fuksionalitetin dhe ne momentin qe klikohet do na zhvendosi
const aboutBtn = document.getElementById('aboutBtn');
aboutBtn.addEventListener('click', () => {
  window.location.href = 'about.html';
});

//3 funskionet e fundit na lejojne te kemi akses ne klikim , dhe te bejme scroll pa problem ne faqe

//Behen ndryshime ne menu
menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}


//Na lejon te bejme scroll
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

//krijon nje swiper te cilin do e perdorimim per te ber scroll ne faqe
var swiper = new Swiper(".team-slider",{
    loop:true,
    grabCursor:true,
    spaceBetween:20,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});