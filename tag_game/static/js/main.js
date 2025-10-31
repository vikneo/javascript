let cnt = 0;
let gameOver = true;

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
        if ( i === 15) {
             numArray.push('');
        } else {
            numArray.push(i + 1);
        }
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
        td.style.width = '24%'
        td.id = `${i}`;

        let num = ticksArray[i]
        if (num > 0 && num < 10) {
            td.innerHTML = `  ${num}`;
        }
        else if (num === '') {
            // td.innerHTML = ''
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
//     Обработчик для обмена елементами
// =======================================================

document.querySelector('.table-bordered').addEventListener('click', function(e) {
    let elemArr = [], numElem;
    
    try {
        for (let i = 0; i < randomArray.length; i++) {
            document.getElementById(i).innerHTML = randomArray[i]
            if (randomArray[i] == '') {
                numElem = document.getElementById(i);
                if (document.getElementById(i - 1) && i !== 4 && i !== 8 && i !== 12)
                    elemArr.push(document.getElementById(i - 1));
                if (document.getElementById(i + 1) && i !== 3 && i !== 7 && i !== 11)
                    elemArr.push(document.getElementById(i + 1));
                if (document.getElementById(i - 4))
                    elemArr.push(document.getElementById(i - 4));
                if (document.getElementById(i + 4))
                    elemArr.push(document.getElementById(i + 4));
            }
        }
        
        let id = +numElem.id
        let target = e.target;
        
        if (target.innerText !== '') {
            cnt++
            counter(cnt)
        }
        
        if (randomArray.join('') !== factArrayNumber.join('')) {
            if(elemArr.includes(target)) {
                let buffer = target.innerHTML;
                randomArray.indexOf(+target.innerHTML);
                target.innerHTML = ''
                target.style.backgroundColor = '#bbb2b2'
                numElem.innerHTML = buffer;
                numElem.style.backgroundColor = '#fbb96b'
                
                let numb = [];
                for(let i = 0; i < randomArray.length; i++){
                    numb.push(Number(document.getElementById(i.toString()).innerHTML));
                    // Добавить и обновить localStorage()
                }
                numb[numb.indexOf(0)] = '';
                randomArray = numb;
            }
        } else {
            console.log("You win!");
            gameOver = false;
        }
    }
    catch (error) {
        console.log(`Границу доски не кликаем! Описание: ${error}`)
    }
})

function reload(button) {
    button.addEventListener('click', function(e) {
        if (e.target.value) {
            window.location.reload()
        }
    })
}

function counter(cnt) {
    let count = document.getElementById('count')
    let input = document.getElementById('reset')
    
    if (gameOver) {
        count.innerHTML = `Кол-во ходов: <span style="min-width: 50px;">${cnt}</span>`;
        reload(input);
    } else {
        input.value = "Еще разок?";
        reload(input);
    }

}


let factArrayNumber = createTricksArray()
let randomArray = randomSort(factArrayNumber)

createFieldTick(randomArray)
