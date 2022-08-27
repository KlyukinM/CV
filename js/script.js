'use strict'


// Прокрутка при клике

//Ищим все пунты меню с data атрибутами
const menuLinks = document.querySelectorAll('.menu__link[data-goto]')
// Проверяем найдены ли такие пункты
if (menuLinks.length > 0) {
    // Если найдены, проходимся по ним
    menuLinks.forEach(menuLink => {
        // Навешиваем событие "клик" на каждый пункт и обращаемся к функции
        menuLink.addEventListener('click', onMenuLinkClick)
    })
        // Пишем эту функцию
        function onMenuLinkClick (e) {
            // Получаем объект, на который кликаем
            const menuLink = e.target
            // Проверяем заполнен ли data атрибут и существует ли объект, на который ссылается данный data атрибут
            if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
                // Получаем объект
                const gotoBlock = document.querySelector(menuLink.dataset.goto)
                // Высчитываем положение объекта с учетом высоты шапки:
                // 1. Создаем константу gotoBlockValue
                // 2. С помощью встроенной функции gotBoundingClientRect (top чтобы получить расстояние от верха) получаем местоположение объекта в пикселях
                // 3. Прибавляем к этому расстоянию количество уже прокрученных пикселей с помощью pageYOffset
                // 4. Затем вычитаем высоту шапки, чтобу часть контента не попала под нее
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight - 20
                
                            
                
                // Добавляем прокрутку
                window.scrollTo({
                    // Сверху (top) до высчетанной раннее переменной (gotoBlockValue)
                    top: gotoBlockValue,
                    // Добавляем плавность
                    behavior: 'smooth'
                })
                // Отключаем действие по умолчанию - переход по ссылке
                // e.preventDefault()
            }
        }
}

