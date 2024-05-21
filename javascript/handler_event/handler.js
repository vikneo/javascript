function handleClick () {
    console.log(`Clicked!`)
}

function handleClickRemove () {
    alert(`С кнопки "click 2" - будет снято событие`)
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

function handleClickEvent (event) {
    // Вывод текстовое содержимое каждой кнопки "event.target.textContent"
    console.log(`Clicked! event - ${event.target.textContent}`)
    // вывод свойства "data"
    console.log(event.target.dataset)
    console.log(`Строка (свойства "data") - ${event.target.dataset.num}`)
    console.log(`Число (свойства "data") - ${parseInt(event.target.dataset.num)}`)
}

function buttonEvent () {
    let buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', handleClickEvent)
    })
}

let targetClick = (event) => {
    // Сравниваем два свойства "target" === "currentTarget"
    console.log('target > ', event.target)
    console.log('currentTarget > ', event.currentTarget)
    console.log("Сравниваем два свойства 'target' === 'currentTarget' > ", event.target === event.currentTarget)
    // Остановить всплытие после нажатия на кнопку
    // что бы событие "Window click" не сработало
    // event.stopPropagation()
}

function Target () {
    let buttons = document.querySelectorAll('.btn');
    // С данной функцией при клике на кнопку, свойства target и curentTarget будут равны!
    buttons.forEach(button => {
        button.addEventListener('click', targetClick)
    })
}

function notTarget () {
    let buttons = document.querySelectorAll('.btn')
    // С данной функцией при вложености в кноку тега, уже свойства
    // target и curentTarget НЕ будут равны!
    buttons.forEach(button => {
        button.addEventListener('click', targetClick)
    })
}

function windowClick () {
    window.addEventListener('click', function (event) {
        console.log('Window Click', event.target)
        // Останавливаем погружение к след. элементам после нажатия на кнопку
        event.stopPropagation();
    }, {capture: true})
}
