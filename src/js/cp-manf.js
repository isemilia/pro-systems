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
            768: {
              slidesPerView: 3,
              spaceBetween: 45,
              centerInsufficientSlides: false,
            },
            320: {
              slidesPerView: 3,
              spaceBetween: 10,
              centerInsufficientSlides: true,
            },
        }
    });

});

['resize', 'DOMContentLoaded'].forEach(e => {
  window.addEventListener(e, () => {
      
    const pic = document.querySelector('.manufacturer__pic wow animate__animated animate__fadeIn');
    const title = document.querySelector('.manufacturer__title');
      if (window.matchMedia('(max-width: 1023px)').matches) {
          console.log('Screen less than 1023');
          title.insertAdjacentElement('afterend', pic);
      } else {
          console.log('Screen larger than 1023');
      }
  });
})