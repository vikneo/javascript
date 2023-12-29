function typeString () {
    let num = 12345
    alert('Переменная "num" - целочисленная: значение - ' + num)
    num = 'string'
    alert('Теперь "num" - строка: значение - ' + num)
}

function deliveryZero () {
    document.getElementById('result').innerHTML = 2 / 0
    // alert('Делим 2 / 0 = ' + 2 / 0)
}

function remove () {
    document.getElementById('result').innerHTML = ''
    document.getElementById('check_1').innerHTML = ''
    document.getElementById('check_2').innerHTML = ''
    document.getElementById('primer_str').innerHTML = ''
}


function primerString () {
    let str = "Двойные ковычки";
    let str2 = 'Одинарные кавычки тоже подойдут';
    let phrase = `Обратные кавычки позволяют встраивать переменные: значение → ${str}`;

    // document.getElementById('primer_str').innerHTML = `"${str}"\n${str2}\n${phrase}`
    document.getElementById('primer_str').innerHTML = 
    `<p>"${str}"</p><p>'${str2}'</p>` + `<p>${phrase}</p>`
}

function typeForm1 () {
    document.getElementById('check_1').innerHTML = typeof 5
}

function typeForm2 () {
    document.getElementById('check_2').innerHTML = typeof(5)
}
