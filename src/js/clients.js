window.addEventListener('DOMContentLoaded', () => {
  if(typeof(document.querySelector('#clientsSlider')) != 'undefined' && document.querySelector('#clientsSlider') != null){
    const swiper = new Swiper('#clientsSlider', {
      loop: true,
      // Navigation arrows
      navigation: {
        nextEl: '#clientsSliderNext',
        prevEl: '#clientsSliderPrev',
      },
      centerInsufficientSlides: true,
      slidesPerView: 1,
      breakpoints: {
          // when window width is >= 1440px
          1440: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 3,
          },
          375: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 10
          },
      }
    });
  } else if (typeof(document.querySelector('#clientsSlider2row')) != 'undefined' && document.querySelector('#clientsSlider2row') != null){
    const swiper = new Swiper('#clientsSlider2row', {
      loop: false,
      // Navigation arrows
      navigation: {
        nextEl: '#clientsSliderNext',
        prevEl: '#clientsSliderPrev',
      },
      centerInsufficientSlides: true,
      slidesPerView: 1,
      grid: {
        rows: 2,
        fill:	'row',
      },
      breakpoints: {
          // when window width is >= 1440px
          1440: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 3,
          },
          375: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
            grid: {
              rows: 2,
              fill:	'row',
            },
          },
      }
    });
  }
});
