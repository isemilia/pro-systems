window.addEventListener('DOMContentLoaded', () => {
    const switchTitles = Array.from(document.querySelectorAll('[data-switch-title]'));
    const switchDescrs = Array.from(document.querySelectorAll('[data-switch-descr]'));

    function removeAll() {
        switchTitles.forEach((item) => {
            item.classList.remove('autom__list-item_active');
        })
        switchDescrs.forEach((descr) => {
            descr.classList.remove('autom__descr_active');
        })
    }

    switchTitles.forEach((item, i) => {
        item.addEventListener('click', () => {
            removeAll();
            item.classList.add('autom__list-item_active');
            switchDescrs[i].classList.add('autom__descr_active');
        })
    })
})