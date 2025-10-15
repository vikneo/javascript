let _columns = document.querySelectorAll(".num-candle")

function format(idx = 0) {
    for(clm of _columns) {
        let sym = clm.innerText.split("")
        if (idx < 4) {
            if(sym.slice(1) < 10) {
                clm.innerHTML = `${sym[0]}0${sym[1]}`
            }
        } else {
            if(+sym.slice(1).join("") < 9) {
                // alert(`${sym} = ${sym.slice(1).join("")} - idx = ${idx}`)
                return clm.innerHTML = `${sym[0]}0${idx}`
            }
            else return clm.innerHTML = `${sym[0]}${idx}`
        }
    }
}

// format()
// ======================================================= //
// Проверка валидных данных в полях "input"
let input_field = document.querySelectorAll(".candle")

for (let i = 0; i < input_field.length; i++) {
    let inp = input_field[i].addEventListener('input', function(e) {
        console.log(inp)

    })
}

// ======================================================= //
// Добавление полей "input" для ввода данных свечей
let click = document.querySelector("#addCandle").addEventListener('click', function(e) {
    let _form = document.querySelector(".block-candles")
    let columns = document.querySelectorAll(".candle")
    for (let i = columns.length - 1; i > 0; i-- ) {
        if (i === columns.length - 1) {
            let div = document.createElement("div")
            let input = document.createElement("input")
            div.className = 'flex candle'
            input.type = 'number'
            input.placeholder = `Свеча ${i + 2}`
            input.className = 'input'
            div.appendChild(input)
            _form.appendChild(div)
        }
    }
})

// ======================================================= //
// Удаление полей "input" для ввода данных свечей
let remove = document.querySelector("#removeCandle").addEventListener('click', function() {
    let _form = document.querySelector(".block-candles")
    let columns = document.querySelectorAll(".candle")
    for (let i = columns.length - 1; i > 0; i--) {
        if (i >= 4) {
            if (i + 1 === columns.length) {
                _form.removeChild(columns[i])
            }
        }
    }
})

// ======================================================= //
// Очистить форму ввода данных 
let reset_form = document.querySelector(".reset").addEventListener('click', function() {
    let result = document.querySelector(".results")
    document.querySelector("#formCandle")
    console.log("Форма очищена!")
    formCandle.reset()
    result.innerHTML = ``
    
})

function readData(candles, cords) {
    // Функция преобразовывает данные в type: float и
    // заполняет массивы сопротивление свечей и высовольтных проводов для дальнейших расчетов

    let candlesArray = []
    let cordsArray = []

    for (let candle of candles) {
        let val = parseFloat(candle.querySelector(".input").value)
        if (val > 0) {
            candlesArray.push(val)
        }
    }
    
    for (let cord of cords) {
        let val = parseFloat(cord.querySelector(".input").value)
        if (val > 0) {
            cordsArray.push(val)
        }
    }
    
    if (candlesArray.length !== candles.length) {
        alert("Не все поля звполнены для свечей!");
        throw new Error("Не все поля звполнены для свечей!")
    }
    if (cordsArray.length !== cords.length) {
        alert("Заполните все поля для проводов!")
        throw new Error("Заполните все поля для проводов!")
    }

    return [candlesArray, cordsArray]
}

function sorting(array) {
    // Функция подсчитывает значение из массивов свечей и проводов.
    // Подбирает по ближайшему значению, добавляет и возвращает новый массив.

    let elemArray = []
    let elem1

    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array[i].length; j++) {
            if(i % 4 === 0) {
                if (j % 4 === 0) {
                    elem1 = array[i][j]
                    elemArray.push(elem1)
                    break
                }
            }
            if (j + i % 4 <= array[i].length) {
                let r = 0
                let remains = array[i].slice(i % 4 + j)
                let old = 999
                for(let elm of remains) {
                    if (old >= Math.abs(elem1 - elm)) {
                        old = Math.abs(elem1 - elm)
                        r = elm
                    }
                }
                elemArray.push(r)
                break
            }
        }
    }
    return elemArray
}

function formatOut(array) {
    // Функция форматирует вывод на экран готовые данные
    // ToDo дописать функцию lдля точного определения комплектов

    let result = document.querySelector(".results")
    let x = 1

    result.innerHTML = `<em style="color: red">Временное оформление</em><br><br>`
    for (let i = 0; i < array.length; i++) {
        if(i % 4 === 0) {
            result.innerHTML += `<strong>Комплект №${x}</strong>`
            x++
        }
        result.innerHTML += `
        <p style="color: black">Свеча <b>№${i + 1}</b> - Провод <b>№${i % 4 +1}</b> = <span style="color: red">${array[i]}</span> MOм</p>
        `
    }
}

function calculate() {
    // Функция считывает и проверяет заполнение полей "input" и 
    // добавляет в массивы сопротивление свечей и высовольтных проводов.
    const candles = document.querySelectorAll(".candle")
    const cords = document.querySelectorAll(".cord")
    
    try {
        let candlesArray = readData(candles, cords)[0]
        let cordsArray = readData(candles, cords)[1]
        let calc = []
        
        for (let candl of candlesArray) {
            let r = []
            for (let cord of cordsArray ) {
                r.push(parseFloat((cord + candl).toFixed(2)))
            }
            calc.push(r)
        }
        
        formatOut(sorting(calc))

        let audioAlert = document.querySelector("#kolokol").play() 
        console.log(audioAlert)
    }
    catch (Error) {
        console.log(`Описание ошибки: ${Error}`)
    }
}
