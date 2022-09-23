window.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('#neo-fiscal-photo-slider', {
        loop: true,
      
        // Navigation arrows
        navigation: {
          nextEl: '#scvNext',
          prevEl: '#scvPrev',
        },
        slidesPerGroup: 1,
        breakpoints: {
            1440: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            }
        }
    });
});