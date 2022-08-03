window.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('#smiSlider', {
        // Navigation arrows
        navigation: {
          nextEl: '#smiSliderNext',
          prevEl: '#smiSliderPrev',
        },
        centerInsufficientSlides: true,
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