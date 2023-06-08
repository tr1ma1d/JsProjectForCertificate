const swiper = new Swiper('.swiper', {

    direction: 'horizontal',



    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    slidesPerView: 1,
    autoHeight: true,
    spaceBetween: 50,
    
    breakpoints: {
        
        1200: {
            slidesPerView: 2,
            spaceBetween: 2,
        },  
        1900: {
            slidesPerView: 3,

        },
    },
    
   

});

