window.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('#smiSlider', {
        // Navigation arrows
        navigation: {
          nextEl: '#smiSliderNext',
          prevEl: '#smiSliderPrev',
        },
        centerInsufficientSlides: true,
        slidesPerView: 1,
        loop: true,
        breakpoints: {
            // when window width is >= 1440px
            1440: {
              slidesPerView: 3,
              spaceBetween: 20
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            576: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 10
            },
        }
    });
});