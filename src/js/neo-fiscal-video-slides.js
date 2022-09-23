window.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('#neo-fiscal-video-slider', {
        loop: true,
      
        // Navigation arrows
        navigation: {
          nextEl: '#scvNext',
          prevEl: '#scvPrev',
        },
        centeredSlides: true,
        slidesPerGroup: 1,
        breakpoints: {
            1440: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 1,
            }
        }
    });
});