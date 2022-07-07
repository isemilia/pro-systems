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
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
        breakpoints: {
            1440: {
                slidesPerView: 3,
            }
        }
    });

    const scvImgs = Array.from(document.querySelectorAll('[data-scv-img]'));
    const scvLinks = Array.from(document.querySelectorAll('[data-scv-zoom]'));

    scvImgs.forEach((img, i) => {
        scvLinks[i].href = img.src;
    });
});