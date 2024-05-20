function handleClick () {
    console.log('Clicked!')
}

function Button () {
    let button = document.querySelector('.btn1')
    let button2 = document.querySelector('.btn2')
    
    button.addEventListener('click', handleClick)
    button2.addEventListener('click', handleClick)

    // Снять обработчик с кнопки
    button2.removeEventListener('click', handleClick)
}

function Buttons () {
    let buttons = document.querySelectorAll('.btn')

    // Получить доступ к каждой кнопки через метод "forEach"
    buttons.forEach(button => {
        button.addEventListener('click', handleClick)
    });
}