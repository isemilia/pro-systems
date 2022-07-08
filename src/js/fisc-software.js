window.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('#fsSlider', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        // Navigation arrows
        navigation: {
          nextEl: '#fsSliderNext',
          prevEl: '#fsSliderPrev',
        },
        centerInsufficientSlides: true,
        slidesPerView: 1,
        breakpoints: {
            // when window width is >= 1440px
            1440: {
              slidesPerView: 4,
              spaceBetween: 10
            },
        }
    });
});