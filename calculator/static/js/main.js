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
    let form_reset = document.querySelector("#formCandle")
    console.log(form_reset)
    formCandle.reset()
})

function Prompt() {
    let errorRate = +prompt(`
    Введите погрешность для расчета в MOm.\n
    При расчетах для подбора комплекта
    будет учитваться погрешность в диапазоне
    от 0 до <вводимого значения>.`)
    if(errorRate) {
        alert(`Вы ввели ${errorRate}`)
    }
}