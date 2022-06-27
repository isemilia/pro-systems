window.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('#clientsSlider', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        // Navigation arrows
        navigation: {
          nextEl: '#clientsSliderNext',
          prevEl: '#clientsSliderPrev',
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