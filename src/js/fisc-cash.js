window.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('#fcSlider', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        // Navigation arrows
        navigation: {
          nextEl: '#fcSliderNext',
          prevEl: '#fcSliderPrev',
        },
        centerInsufficientSlides: true,
        slidesPerView: 1,
        breakpoints: {
            // when window width is >= 1440px
            1440: {
              slidesPerView: 3,
              spaceBetween: 10
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 10
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10
            },
            576: {
              slidesPerView: 2,
              spaceBetween: 10
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 10
            },
        }
    });
});