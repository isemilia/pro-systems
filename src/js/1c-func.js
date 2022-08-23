window.addEventListener('DOMContentLoaded', () => {

    const swiper = new Swiper('#icFuncSlider', {
        // Optional parameters
      
        // If we need pagination
        pagination: {
          el: '#icFuncPag',
          clickable: true,
        },
      
    });

    const switchTitles = Array.from(document.querySelectorAll('[data-icfunc-title]'));
    const switchDisplays = Array.from(document.querySelectorAll('[data-icfunc-display]'));

    function removeAll() {
        switchTitles.forEach((item) => {
            item.classList.remove('ic-func__list-item_active');
        });
        switchDisplays.forEach((display) => {
            display.classList.remove('ic-func__display_active');
        });
    };

    switchTitles.forEach((item, i) => {
        item.addEventListener('click', () => {
            removeAll();
            item.classList.add('ic-func__list-item_active');
            switchDisplays[i].classList.add('ic-func__display_active');
        });
    });


    const icfuncMore = Array.from(document.querySelectorAll('[data-icfunc-more]'));
    const icfuncTextMore = Array.from(document.querySelectorAll('[data-icfunc-text-more]'));

    icfuncMore.forEach((item, i) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            if (item.innerText == 'Подробнее') {
                item.innerText = 'Свернуть';
            } else {
                item.innerText = 'Подробнее'
            }
            icfuncTextMore[i].classList.toggle('ic-func__text-more_visible');
        })
    })
})