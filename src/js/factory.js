window.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('#factorySlider', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
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
            1024: {
              slidesPerView: 4,
              spaceBetween: 10
            },
            767: {
              slidesPerView: 3,
              spaceBetween: 10
            },
            320: {
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