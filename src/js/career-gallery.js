var id1 = document.querySelector(".id1");

id1.onclick=function(){
    document.getElementById("aside").classList.toggle("active");
}

document.getElementById("aside__backdrop").onclick=function(){
    document.getElementById("aside").classList.toggle("active");
}


document.getElementById("aside__close").onclick=function(){
    document.getElementById("aside").classList.toggle("active");
}

window.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('#gallerySlider', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        centerInsufficientSlides: true,
        // Navigation arrows
        navigation: {
          nextEl: '#gallerySliderNext',
          prevEl: '#gallerySliderPrev',
        },
        slidesPerView: 1,
        breakpoints: {
            // when window width is >= 1440px
            1440: {
              slidesPerView: 1,
              spaceBetween: 50
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 50
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 50
            },
            465: {
              slidesPerView: 2,
              spaceBetween: 50
            },
        },
    });
});