window.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('#promoSlider', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      // Navigation arrows
      navigation: {
        nextEl: '#promoSliderNext',
        prevEl: '#promoSliderPrev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      keyboard:{
        enabled: true,
        //включить/выключить только когда слайдер в пределах вьюпорта
        onlyInViewport:true,
        pageUpDown:true,
        },
      autoplay: {
        //Пауза между прокруткой
        delay: 2000,
        //Отключение после ручного переключения
        disableOnInteraction: false,
      },
      slidesPerView: 1,
      breakpoints: {
          // when window width is >= 1440px
          1440: {
            slidesPerView: 1,
            spaceBetween: 10
          },
      }
  });
});

['resize', 'DOMContentLoaded'].forEach(e => {
  window.addEventListener(e, () => {
      
    const wrapper = document.querySelector('.promo__wrapper');
    const title = document.querySelector('.promo__title');
      if (window.matchMedia('(max-width: 1023px)').matches) {
          console.log('Screen less than 1023');
          wrapper.insertAdjacentElement('beforebegin', title);
      } else {
          console.log('Screen larger than 1023');
      }
  });
})
