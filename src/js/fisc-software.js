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
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            375: {
              slidesPerView: 2,
              spaceBetween: 10,
              grid: {
                rows: 2,
                fill:	'row',
              },
            },
        }
    });
});