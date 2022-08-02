window.addEventListener('DOMContentLoaded', () => {
    const tabBtns = Array.from(document.querySelectorAll('[data-tabs-btn]'));
    const tabItems = Array.from(document.querySelectorAll('[data-tabs-tab]'));

    function btnRemoveAll() {
        tabBtns.forEach((btn) => {
            btn.classList.remove('tabs__nav-btn_active');
        });
    }

    function tabRemoveAll() {
        tabItems.forEach((item) => {
            item.classList.remove('tabs__tab_active');
        });
    }

    tabBtns.forEach((btn, i) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            btnRemoveAll();
            btn.classList.add('tabs__nav-btn_active');
            tabRemoveAll();
            tabItems[i].classList.add('tabs__tab_active');
        })
    })
})