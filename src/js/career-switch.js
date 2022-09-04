window.addEventListener('DOMContentLoaded', () => {
    const switchTitles = Array.from(document.querySelectorAll('[data-switch-title]'));
    const switchDescrs = Array.from(document.querySelectorAll('[data-switch-descr]'));

    function removeAll() {
        switchTitles.forEach((item) => {
            item.classList.remove('vakansii__list-item_active');
        })
        switchDescrs.forEach((descr) => {
            descr.classList.remove('vakansii__descr_active');
        })
    }

    switchTitles.forEach((item, i) => {
        item.addEventListener('click', () => {
            removeAll();
            item.classList.add('vakansii__list-item_active');
            switchDescrs[i].classList.add('vakansii__descr_active');
        })
    })
})

//

var block = document.getElementById("hidden");
var btn = document.getElementById("more");

btn.addEventListener("click", function(){
    ShowMore();
})

function ShowMore(){
    block.classList.toggle("hidden");
    if(block.classList.contains("hidden")){
        btn.textContent = "Подробнее";
    }
    else{
        btn.textContent = "Скрыть";
    }
}