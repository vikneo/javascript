let start = Date.now()
let cnt = 0;
let gameOver = false;
let timeClockId;
let factArrayNumber = createTricksArray()

let minute = 0
let second = 0

// Сохраняем новый перемешанный массив с номерами в LocalStorage();
if (!localStorage.getItem('tags_game')) {
    localStorage.setItem('tags_game', JSON.stringify([{"tags": randomSort(factArrayNumber), "count":cnt, "timer": [minute, second]}]));
    // localStorage.setItem('tags_game', JSON.stringify([{"tags": debugTricksArray(), "count":cnt, "timer": [minute, second]}]));  // for debug
    let randoTags = JSON.parse(localStorage.getItem("tags_game"));
    createFieldTick(randoTags);
} else {
    createFieldTick(JSON.parse(localStorage.getItem('tags_game')))
}

document.getElementById('reset').addEventListener('click', function(e) {
    let startGame = e.target

    if (startGame.value.toLowerCase() === 'начать игру') {
        gameOver = true;
        timeClockId = setInterval(clockTimer, 1000);
        startGame.value = 'Переиграть';
        let localTime = updateResult()
        formatTime(localTime[0], localTime[1])
    } else if (startGame.value.toLowerCase() === 'переиграть') {
        reload(startGame);
        clearInterval(timeClockId);
        timeClockId = setInterval(clockTimer, 1000);
    } else {
        reload(startGame)
    }

})

function clockTimer(reset = false) {

    let delta = Date.now() - start;
    let seconds = Math.floor(delta / 1000);
    // let clockTimer = JSON.parse(localStorage.getItem('tags_game'))[0].timer
    // let seconds = clockTimer[0] * 60 + clockTimer[1]

    // seconds++
    second = seconds % 60
    minute = Math.floor(seconds / 60)

    formatTime(_minute=minute, _seconds=second)
}

function formatTime(_minute, _second) {
    
    if (_minute < 10) {
        _minute = `0${_minute}`
        if (`${_minute}`.length > 2) {
            _minute = `${_minute[_minute.length - 2]}${_minute[_minute.length - 1]}`
        }
    }

    if (_second < 10) {
        _second = `0${_second}`
        if (`${_second}`.length > 2) {
            _second = `${_second[_second.length - 2]}${_second[_second.length - 1]}`
        }
    }
    let newData = JSON.parse(localStorage.getItem("tags_game"))
    let timerS = newData[0].timer
    timerS[0] = _minute
    timerS[1] = _second

    localStorage.setItem("tags_game", JSON.stringify([{"tags": newData[0].tags, "count": newData[0].count, "timer": timerS}]))

    let block_timer = document.querySelector(".timer")
    block_timer.innerHTML = `
    <div class="clock">
        <div class="time-block" title="Время игры">${_minute}:${_second}</div>
    </div>
    `
}

function initField() {
    // Инициализируем игровое поле устанавливаем высоту равной ширине

    let field_game = document.querySelector(".game_field");
    let width_size = getComputedStyle(field_game);
    field_game.style.min_height = `${width_size.width}`;
}


function createTricksArray() {
    // После инициализации игрового поля,
    // Создаем массив с номерами фишек для игры

    initField();
    const numArray = [];

    for (let i = 0; i < 16; i++) {
        if ( i === 15) {
             numArray.push(' ');
        } else {
            numArray.push(i + 1);
        }
    }

    return numArray;
}

function createFieldTick(ticks_array) {
    // Создаем поля для игровых фишек и устанавливаем
    // значения из массива с номерами.

    let ticksArray = ticks_array[0].tags;
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
        else if (num === ' ') {
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

    let curArray = [];
    let newArray = [];
    let cntLocal = 0

    while (cntLocal !== 16){
        let num = Math.ceil(Math.random() * 16)
        
        if (curArray.indexOf(num) === -1) {
            curArray.push(num)
            cntLocal++;
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
    // Обработчик события "click" при нажатии ЛКМ только на поле с цифрой;
    // В цикле происходит поиск всех соседей с пустым полем;
    // При клике по цифре, элемент с цифрой меняется местами с пустым полем;
    // Новый массив объектов обновляется в LocalStorage();

    let elemArr = [], numElem;
    let setTagsArray = JSON.parse(localStorage.getItem("tags_game"))
    
    try {
        for (let i = 0; i < setTagsArray[0].tags.length; i++) {
            document.getElementById(i).innerHTML = setTagsArray[0].tags[i]
            if (setTagsArray[0].tags[i] == ' ') {
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
        
        let target = e.target;
        
        if (gameOver) {
            if(elemArr.includes(target)) {
                let buffer = target.innerHTML;
                let numb = [];
                let step = counter(e)
    
                setTagsArray[0].tags.indexOf(+target.innerHTML);
                target.innerHTML = ' '
                target.style.backgroundColor = '#bbb2b2'
                numElem.innerHTML = buffer;
                numElem.style.backgroundColor = '#fbb96b'
    
                for(let i = 0; i < setTagsArray[0].tags.length; i++){
                    numb.push(Number(document.getElementById(i.toString()).innerHTML));
                }
    
                numb[numb.indexOf(0)] = ' ';
                localStorage.setItem('tags_game', JSON.stringify([{"tags": numb, "count":step, "timer": [minute, second]}]))
                updateResult()
            }
            checkGameOver()
        }
    }
    catch (error) {
        console.log(`Границу доски не кликаем! Описание: ${error}`)
    }
})

function reload(button) {
    // Обработчик собития "click" при нажатии кноки "Переиграть" или "Еще разок"

    if (button.value.toLowerCase() === 'переиграть' || (!gameOver & button.value.toLowerCase() === 'еще разок')) {
        localStorage.setItem('tags_game', JSON.stringify([{"tags": randomSort(factArrayNumber), "count":counter(button, true), "timer": [minute, second]}]));
        // localStorage.setItem('tags_game', JSON.stringify([{"tags": debugTricksArray(), "count":counter(button, true), "timer": [minute, second]}]));  // for debug
        window.location.reload()
    }
}

function checkGameOver() {
    // Функция проверяет на окончание игры
    // Если собранная матрица === матрице изначальной - игра завершена

    let end_game = document.querySelector('.game_over')
    let input = document.getElementById('reset')
    let randomArray = JSON.parse(localStorage.getItem("tags_game"))

    if (randomArray[0].tags.join('') === factArrayNumber.join('')) {
        gameOver = false;
        formatTime(
            _minute=randomArray[0].timer[0],
            _second=randomArray[0].timer[1]
        )
        console.log("You win!");
        end_game.style.display = 'block';
        clearInterval(timeClockId)
        input.value = "Еще разок";
        input.style.backgroundColor = '#4caf50c2';
        return false;
    }

    return true;
}

function updateResult() {
    // Обновляем результат "Кол-во ходов" и
    // Отправляем запрос на обработку события по нажатию кнопки

    let countL = document.getElementById('count')
    let countStep = JSON.parse(localStorage.getItem("tags_game"))
    
    if (gameOver) {
        countL.innerHTML = `Кол-во ходов: <span style="min-width: 50px;">${countStep[0].count}</span>`;
    }
    return countStep[0].timer
}

function counter(event, reset = false) {
    // Счетчик для кол-во затраченных ходов;
    // При перезагрузки страницы счетчик не сбрасывается;
    // Для сброса счетчика нужно передать переменной "reset" = true;

    let currentStep = JSON.parse(localStorage.getItem("tags_game"));

    if (reset) {
        currentStep[0].count = 0
    } else {
        if (event.target.innerText !== ' ' & event.type === 'click') {
            currentStep[0].count++
        }
    }

    return currentStep[0].count
}

checkGameOver()
updateResult()

//===========================================================================
//              Создание массива для дебаг режима                           =
//===========================================================================

function debugTricksArray() {
    // После инициализации игрового поля,
    // Создаем массив с номерами фишек для дебаг режима
    initField();
    const numArray = [];
    for (let i = 0; i < 16; i++) {
        if (i === 14) {
             numArray.push(' ');
        } else if (i === 15) {
            numArray.push(i);
        } else {
            numArray.push(i + 1);
        }
    }

    return numArray;
}
