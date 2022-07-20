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
        //Закончить на последнем слайде
        stopOnLastSlide: true,
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
