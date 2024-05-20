function handleClick () {
    console.log(`Clicked!`)
}

function handleClickRemove () {
    alert(`С кнопки "click 2" - будет снято событие`)
}

function handleClickEvent (event) {
    // Вывод текстовое содержимое каждой кнопки "event.target.textContent"
    console.log(`Clicked! event - ${event.target.textContent}`)
    // вывод свойства "data"
    console.log(event.target.dataset)
    console.log(`Строка (свойства "data") - ${event.target.dataset.num}`)
    console.log(`Число (свойства "data") - ${parseInt(event.target.dataset.num)}`)
}

function Button () {
    let button = document.querySelector('.btn1');
    let button2 = document.querySelector('.btn2');
    
    button.addEventListener('click', handleClick)
    button2.addEventListener('click', handleClickRemove)

    // Снять обработчик с кнопки
    button2.removeEventListener('click', handleClickRemove)
}

function Buttons () {
    let buttons = document.querySelectorAll('.btn')

    // Получить доступ к каждой кнопки через метод "forEach"
    buttons.forEach(button => {
        button.addEventListener('click', handleClick);
    });
}

// ==== Всплытие и погружение (Фазы Жизненного Цикла События) ===

function buttonEvent () {
    let buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', handleClickEvent)
    })
}