let cnt = 0;
let gameOver = true;


let factArrayNumber = createTricksArray()

if (!localStorage.getItem('tags_game')) {
    localStorage.setItem('tags_game', JSON.stringify(randomSort(factArrayNumber)))
    // localStorage.setItem('tags_game', JSON.stringify(factArrayNumber)) // for debug
    let randoTags = JSON.parse(localStorage.getItem("tags_game"))
    createFieldTick(randoTags);
} else {
    createFieldTick(JSON.parse(localStorage.getItem('tags_game')))
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
        if ( i === 14) {
             numArray.push(' ');
        } else if (i === 15) {
            numArray.push(i);
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
    let setTagsArray = JSON.parse(localStorage.getItem("tags_game"))
    
    try {
        for (let i = 0; i < setTagsArray.length; i++) {
            document.getElementById(i).innerHTML = setTagsArray[i]
            if (setTagsArray[i] == ' ') {
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
        
        if(elemArr.includes(target)) {
            let buffer = target.innerHTML;
            setTagsArray.indexOf(+target.innerHTML);
            target.innerHTML = ' '
            target.style.backgroundColor = '#bbb2b2'
            numElem.innerHTML = buffer;
            numElem.style.backgroundColor = '#fbb96b'
            
            if (target.innerText !== ' ') {
                cnt++
                counter(cnt)
            }
            
            let numb = [];
            for(let i = 0; i < setTagsArray.length; i++){
                numb.push(Number(document.getElementById(i.toString()).innerHTML));
            }

            numb[numb.indexOf(0)] = ' ';
            localStorage.setItem('tags_game', JSON.stringify(numb))
            checkGameOver()
        }
    }
    catch (error) {
        console.log(`Границу доски не кликаем! Описание: ${error}`)
    }
})

function reload(button) {
    button.addEventListener('click', function(e) {
        if (e.type === 'click') {
            localStorage.setItem('tags_game', JSON.stringify(randomSort(factArrayNumber)));
            // localStorage.setItem('tags_game', JSON.stringify(factArrayNumber)) // for debug
            window.location.reload()
        }
    })
}

function checkGameOver() {
    // Функция проверяет на окончание игры
    // Если собранная матрица === матрице изначальной - игра завершена

    let end_game = document.querySelector('.game_over')
    let input = document.getElementById('reset')
    let randomArray = JSON.parse(localStorage.getItem("tags_game"))

    if (randomArray.join('') === debugTricksArray().join('')) {
        gameOver = false;
        console.log("You win!");
        end_game.style.display = 'block';
        input.value = "Еще разок";
        input.style.backgroundColor = '#4caf50c2';
        return false;
    }

    return true;
}

function counter(cnt) {
    let count = document.getElementById('count')
    let input = document.getElementById('reset')
    
    if (gameOver) {
        count.innerHTML = `Кол-во ходов: <span style="min-width: 50px;">${cnt}</span>`;
        reload(input);
    } else {
        reload(input);
    }

}

checkGameOver()
counter(cnt)

//===========================================================================
//              Создание массива для дебаг режима                           =
//===========================================================================

function debugTricksArray() {
    // После инициализации игрового поля,
    // Создаем массив с номерами фишек для дебаг режима
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
