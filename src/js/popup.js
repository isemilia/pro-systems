
    const fileInputBtn = document.getElementById('fileInputBtn');
    const fileInput = document.getElementById('fileInputElem');
    fileInputBtn.addEventListener('click', () => { 
        fileInput.click();
    })

    fileInput.addEventListener('change', () => {
        fileInputBtn.innerText = fileInput.value.split('\\').pop();
    })

    const popup = document.querySelector(('[data-popup]'));
    const popupOverlay = document.querySelector(('[data-popup-overlay]'));
    const popupTriggers = document.querySelectorAll('[data-popup-open]');

    popupTriggers.forEach(btn => {
        btn.addEventListener('click', e => {
            e.preventDefault();
            popup.classList.add('popup_active');
        })
    })

    popupOverlay.addEventListener('click', () => {
        popup.classList.remove('popup_active');
    })

