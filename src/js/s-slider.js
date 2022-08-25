window.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('#ssSlider', {
        loop: true,
      
        // Navigation arrows
        navigation: {
          nextEl: '#ssNext',
          prevEl: '#ssvPrev',
        },
        centeredSlides: true,
        slideActiveClass: 's-slider__swiper-slide_active',
        slidesPerGroup: 1,
        breakpoints: {
            1440: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 3,
            }
        }
    });

    const ssImgs = Array.from(document.querySelectorAll('[data-ss-img]'));
    const ssLinks = Array.from(document.querySelectorAll('[data-ss-zoom]'));

    ssImgs.forEach((img, i) => {
        ssLinks[i].href = img.src;
    });
});