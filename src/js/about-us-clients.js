window.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('#clientSlider', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        // Navigation arrows
        navigation: {
          nextEl: '#clientSliderNext',
          prevEl: '#clientSliderPrev',
        },
        slidesPerView: 1,
        breakpoints: {
            // when window width is >= 1440px
            1440: {
              slidesPerView: 4,
              spaceBetween: 10
            },
            1025: {
              slidesPerView: 3,
              spaceBetween: 10
            },
            320: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
        }
    });
});