window.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('#manfCSISlider', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        // Navigation arrows
        navigation: {
          nextEl: '#manfCSISliderNext',
          prevEl: '#manfCSISliderPrev',
        },
        slidesPerView: 1,  
        initialSlide : 0,
        // centeredSlides:true,
        // centerInsufficientSlides: true,
        breakpoints: {
            // when window width is >= 1440px
            1440: {
              slidesPerView: 3,
              spaceBetween: 45
            },
        }
    });
});