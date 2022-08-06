window.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('#clientsSlider', {
        loop: true,
        // Navigation arrows
        navigation: {
          nextEl: '#clientsSliderNext',
          prevEl: '#clientsSliderPrev',
        },
        centerInsufficientSlides: true,
        slidesPerView: 1,
        breakpoints: {
            // when window width is >= 1440px
            1440: {
              slidesPerView: 4,
              spaceBetween: 10
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 3,
            },
            375: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            320: {
              slidesPerView: 2,
              spaceBetween: 10
            },
        }
    });
});
