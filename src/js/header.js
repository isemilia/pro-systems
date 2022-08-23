window.addEventListener('DOMContentLoaded', () => {
    const menuLinks = Array.from(document.querySelectorAll('[data-menu-link]'));
    const menuDropdowns = Array.from(document.querySelectorAll('[data-menu-dropdown]'));
    const menuBackBtns = Array.from(document.querySelectorAll('[data-menu-back]'));
    const menuDDGrids = Array.from(document.querySelectorAll('.menu__dropdown-grid'));

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
                    link.classList.add('menu__link_active');
                    menuDropdowns[i].classList.add('menu__dropdown_active');
                    counter += 1;
                } else if (counter > 0) {
                    hideAll();
                    link.classList.remove('menu__link_active');
                    menuDropdowns[i].classList.remove('menu__dropdown_active');
                    resetCounter();
                }
            });
        });
        menuBackBtns.forEach((btn, i) => {
            btn.addEventListener('click', () => {
                menuLinks[i].classList.remove('menu__link_active');
                menuDropdowns[i].classList.remove('menu__dropdown_active');
                resetCounter();
            });
        });
        window.addEventListener('mouseup', function(e) {
            menuDropdowns.forEach((item, i) => {
                if (e.target != item && e.target != menuDDGrids[i]) {
                    menuLinks[i].classList.remove('menu__link_active');
                    menuDropdowns[i].classList.remove('menu__dropdown_active');
                    resetCounter();
                }
            })
        });
    }
    
    showDropdown();

    const headerMenu = document.querySelector('[data-header-menu]');
    const headerHamb = document.querySelector('[data-header-hamburger]');

    headerHamb.addEventListener('click', () => {
        headerMenu.classList.toggle('menu_active');
        headerHamb.classList.toggle('header__hamburger_active');
    })

/*     window.addEventListener('resize', function() {
        if (window.matchMedia('(max-width: 1023px)').matches) {
          console.log('Screen less than 1023')
        } else {
          console.log('Screen larger than 1023px')
        }
      }); */

});

//footer 

['resize', 'DOMContentLoaded'].forEach(e => {
    window.addEventListener(e, () => {
        // Declare a fragment:
        let fragment = document.createDocumentFragment();
        let footerRows = document.querySelectorAll('.footer__row');
        if (window.matchMedia('(max-width: 575px)').matches) {
            console.log('Screen less than 575')
            // Append desired element to the fragment:
            fragment.appendChild(document.querySelector('.footer__social'));
            // Append fragment to desired element:

            footerRows[0].appendChild(fragment);
        } else {
            console.log('Screen larger than 575')
            fragment.appendChild(document.querySelector('.footer__social'));
            footerRows[1].appendChild(fragment);
        }
    });
})