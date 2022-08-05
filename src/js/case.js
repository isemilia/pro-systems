window.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('#caseSlider', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        // Navigation arrows
        navigation: {
          nextEl: '#caseSliderNext',
          prevEl: '#caseSliderPrev',
        },
        slidesPerView: 1,
        breakpoints: {
            // when window width is >= 1440px
            1440: {
              slidesPerView: 2,
              spaceBetween: 50
            },
            1200: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
        }
    });
});