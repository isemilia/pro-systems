window.addEventListener('DOMContentLoaded', () => {
    const switchTitles = Array.from(document.querySelectorAll('[data-switch-title]'));
    const switchDescrs = Array.from(document.querySelectorAll('[data-switch-descr]'));
    const switchImgs = Array.from(document.querySelectorAll('[data-switch-img]'));

    function removeAll() {
        switchTitles.forEach((item) => {
            item.classList.remove('autom__list-item_active');
        })
        switchDescrs.forEach((descr) => {
            descr.classList.remove('autom__descr_active');
        })
        switchImgs.forEach((img) => {
            // img.classList.remove('autom__img_active');
            img.style.display = 'none';
        })
    }

    switchTitles.forEach((item, i) => {
        item.addEventListener('click', () => {
            removeAll();
            item.classList.add('autom__list-item_active');
            switchDescrs[i].classList.add('autom__descr_active');
            // switchImgs[i].classList.add('autom__img_active');
            switchImgs[i].style.display = 'block';
        })
    })
})