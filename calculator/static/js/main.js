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
            // alert(columns[i])
            _form.innerHTML += `
            <div class="flex candle">
            <input class="input" type="text" name="candle-${i + 2}" placeholder="Свеча ${i + 2}">
            </div>
            `
            // <label class="num-candle" for="candle-${i + 2}">${format(i + 2)}</label>
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
