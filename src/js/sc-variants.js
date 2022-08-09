window.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('#scvSlider', {
        loop: true,
      
        // Navigation arrows
        navigation: {
          nextEl: '#scvNext',
          prevEl: '#scvPrev',
        },
        centeredSlides: true,
        slideActiveClass: 'sc-variants__swiper-slide_active',
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

    const scvImgs = Array.from(document.querySelectorAll('[data-scv-img]'));
    const scvLinks = Array.from(document.querySelectorAll('[data-scv-zoom]'));

    scvImgs.forEach((img, i) => {
        scvLinks[i].href = img.src;
    });
});