window.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('#causesSlider', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        // Navigation arrows
        navigation: {
          nextEl: '#causesSliderNext',
          prevEl: '#causesSliderPrev',
        },
        slidesPerView: 1,
        breakpoints: {
            // when window width is >= 1440px
            1440: {
              slidesPerView: 4,
              spaceBetween: 10
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10
            },
            767: {
              slidesPerView: 3,
              spaceBetween: 10
            },
            375: {
              slidesPerView: 2,
              spaceBetween: 10
            },
        }
    });
});