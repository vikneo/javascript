function modWin () {
    alert("Это небольшое окно с сообщением называется модальным окном. Понятие модальное означает, что пользователь не может взаимодействовать с интерфейсом остальной части страницы, нажимать на другие кнопки и т.д. до тех пор, пока взаимодействует с окном. В данном случае – пока не будет нажата кнопка «OK».")
}

function promtWin () {
    let result = prompt('title', '')
    document.getElementById('promt').innerHTML = 
        `<p class="task-6-promt">${result}<br><button type="submit" onclick="remote()">Очистить</button></p>`
}

function remote () {
    document.getElementById('promt').innerHTML = ''
}

function confirmWin () {
    let test = confirm("Ты здесь главный?")
    if (test == true) {
        alert(`Была нажата кнопка 'Да' - ${test}`)
    } else {
        alert(`Была нажата кнопка 'Нет' - ${test}`)
    }
}

function practica () {
    let name = prompt("Ваше имя?", '')
    alert(`Ваше имя - ${name}`)
}