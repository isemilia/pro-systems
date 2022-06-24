window.addEventListener('DOMContentLoaded', () => {
    const menuLinks = Array.from(document.querySelectorAll('[data-menu-link]'));
    const menuDropdowns = Array.from(document.querySelectorAll('[data-menu-dropdown]'));

    let counter = 0;
    function resetCounter() {
        counter = 0;
    }

    function hideAll() {
        menuLinks.forEach(link => {
            link.classList.remove('menu__link_active');
        });
        menuDropdowns.forEach(drop => {
            drop.classList.remove('menu__dropdown_active');
        });
    }

    function showDropdown() {
        menuLinks.forEach((link, i) => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                if (counter == 0) {
                    hideAll();
                    link.classList.add('menu__link_active');
                    menuDropdowns[i].classList.add('menu__dropdown_active');
                    counter += 1;
                } else if (counter > 0) {
                    link.classList.remove('menu__link_active');
                    menuDropdowns[i].classList.remove('menu__dropdown_active');
                    resetCounter();
                }
            });
        });
    }

    showDropdown();

});