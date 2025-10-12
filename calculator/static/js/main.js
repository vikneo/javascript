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

format()

let click = document.querySelector("#addCandle").addEventListener('click', function(e) {
    let _form = document.querySelector(".block-candles")
    let columns = document.querySelectorAll(".candle")
    for (let i = columns.length - 1; i > 0; i-- ) {
        if (i === columns.length - 1) {
            // alert(columns[i])
            _form.innerHTML += `
            <div class="flex candle">
            <label class="num-candle" for="candle-${i + 2}">${format(i + 2)}</label>
            <input class="input" type="text" name="candle-${i + 2}">
            </div>
            `
        }
    }
})
