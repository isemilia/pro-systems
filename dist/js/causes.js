<<<<<<< HEAD
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
        }
    });
=======
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
        }
    });
>>>>>>> 3d7ca160b00d315de9e357ed76164a9bb80b0620
});