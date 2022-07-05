window.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('#factorySlider', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        // Navigation arrows
        navigation: {
          nextEl: '#factorySliderNext',
          prevEl: '#factorySliderPrev',
        },
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