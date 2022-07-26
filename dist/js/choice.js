window.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('#choiceSlider', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        // Navigation arrows
        navigation: {
          nextEl: '#choiceSliderNext',
          prevEl: '#choiceSliderPrev',
        },
        slidesPerView: 1,
        breakpoints: {
            // when window width is >= 1440px
            1440: {
              slidesPerView: 3,
              spaceBetween: 20
            },
        }
    });
});