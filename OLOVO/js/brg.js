let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu2');

menuBtn.addEventListener('click', () =>{
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active')
})