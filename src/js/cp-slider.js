window.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('#cpsSlider', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        centerInsufficientSlides: true,
        // Navigation arrows
        navigation: {
          nextEl: '#cpsSliderNext',
          prevEl: '#cpsSliderPrev',
        },
        slidesPerView: 1,
        breakpoints: {
            // when window width is >= 1440px
            1440: {
              slidesPerView: 3,
              spaceBetween: 50
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 50
            },
            465: {
              slidesPerView: 2,
              spaceBetween: 50
            },
        }
    });
});