
function initField() {
    // Инициализируем игровое поле устанавливаем высоту равной ширине

    let field_game = document.querySelector(".game_field");
    let width_size = getComputedStyle(field_game);
    field_game.style.height = `${width_size.width}`;
}


function createTricksArray() {
    // После инициализации игрового поля,
    // Создаем массив с номерами фишек для игры
    initField();
    const numArray = [];
    for (let i = 0; i < 16; i++) {
        numArray.push(i);
    }
    return numArray;
}

function createFieldTick(ticks_array) {
    // Создаем поля для игровых фишек и устанавливаем
    // значения из массива с номерами.

    let ticksArray = ticks_array;
    let border = document.querySelector('.table-bordered');
    let tr;
    for (let i = 0; i < ticksArray.length; i++) {
        if (i % 4 == 0) {
            tr = document.createElement('tr');
        }

        let td = document.createElement('td');
        td.className = 'triks_elem';
        td.id = `${i + 1}`;

        let num = ticksArray[i]
        if (num > 0 && num < 10) {
            td.innerHTML = `&nbsp;&nbsp;${num}`;
        }
        else if (num === 0) {
            td.innerHTML = ''
            td.style.backgroundColor = '#bbb2b2'
        } else {
            td.innerHTML = num;
        }
        tr.appendChild(td);
        border.appendChild(tr);
    }
}

function randomSort(numArray) {
    // Создаем массив с рандомными не повторяющимися индексами от 1 до 15;
    // Копируем елемент по индексу из массива createTricksArray() - 1 в новый массив;
    // Сохраняем новый перемешанный массив с номерами в LocalStorage;

    let curArray = [];
    let newArray = [];
    let cnt = 0

    while (cnt !== 16){
        let num = Math.ceil(Math.random() * 16)
        
        if (curArray.indexOf(num) === -1) {
            curArray.push(num)
            cnt++;
        }
    }

    for (let i = 0; i < curArray.length; i++) {
        let num = numArray[curArray[i] - 1]
        newArray.push(num)
    }
    

    return newArray
}

// =======================================================

document.querySelector('.table-bordered').addEventListener('click', function(e) {
    let id = e.target.id
    let num = document.getElementById(id).innerText
    if (num === '') {
        console.log('0')
    } else {

        console.log(num)
    }
})

let factArrayNumber = createTricksArray()
let randomArray = randomSort(factArrayNumber)
createFieldTick(randomArray)