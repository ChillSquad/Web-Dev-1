const menuBar = document.getElementById('menu');
const goTopBtn = document.querySelector(".go-top");

menuBar.onclick = function menuClick() {
    let x = document.getElementById('myTopNav');

    if (x.className === "topNav") {
        x.className += " responsive";
    } else {
        x.className = "topNav";
    }
}

/* Обработчик на scroll окна */
window.addEventListener("scroll", trackScroll);
/* Обработчик на нажатии */
goTopBtn.addEventListener("click", goTop);

function trackScroll() {
    /* Вычисляем положение от верхушки страницы */
    const scrolled = window.scrollY;
    /* Считаем высоту окна браузера */
    const coords = document.documentElement.clientHeight;
    /* Eсли вышли за пределы первого окна */
    if (scrolled > coords) {
        /*  Кнопка появляется */
        goTopBtn.classList.add("go-top--show");
    } else {
        /* Иначе исчезает */
        goTopBtn.classList.remove("go-top--show");
    }
}

function goTop() {
    /* Пока не вернулись в начало страницы */
    if (window.scrollY > 0) {
        /* Скроллим наверх */
        /* Второй аргумент - скорость */
        window.scrollBy(0, -55);
        /* Входим в рекурсию */
        setTimeout(goTop, 0);
    }
}
