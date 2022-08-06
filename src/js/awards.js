window.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('#awardsSlider', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        // Navigation arrows
        navigation: {
          nextEl: '#awardsSliderNext',
          prevEl: '#awardsSliderPrev',
        },
        slidesPerView: 1,  
        initialSlide : 0,
        autoHeight: true,
        centeredSlides:true,
        speed: 700,
        slidesPerGroup: 1,
        breakpoints: {
            // when window width is >= 1440px
            1440: {
              slidesPerView: 3,
              spaceBetween: 20
            },
        }
    });
});