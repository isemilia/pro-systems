window.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('#fiscClientsSlider', {
        // Optional parameters
        loop: false,
        // Navigation arrows
        navigation: {
          nextEl: '#clientsSliderNext',
          prevEl: '#clientsSliderPrev',
        },
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
          // when window width is >= 1440px
          1440: {
            slidesPerView: 4,
            autoHeight: true,
          }
        }
    });
});