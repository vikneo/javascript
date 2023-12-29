function result () {
    let year = prompt('Какой сегодня год? ', "")
    let data = new Date()
    let full_year = data.getFullYear()
    if (+year == full_year) {
        document.getElementById("primer").innerHTML = 
        `<p>let year = prompt('Какой сегодня год? ', "")</p><p>let data = new Date()</p>
        <p>let full_year = data.getFullYear()</p><p>if (+year == full_year) {</p><p style="padding-left: 20px;">'И это правильно!'</p><p>}
        <button type="submit" onclick="remove('primer')">Стереть</button>`
        alert("И это правильный ответ!")
    }// else {
    //     alert("Советую еще подумать!")
    // }
}

function blockElse () {
    let year = prompt('Какой сегодня год? ', "")
    let data = new Date()
    let full_year = data.getFullYear()
    if (+year == full_year) {
        alert("И это правильный ответ!")
    } else {
        alert("Советую еще подумать!")
    }
}

function blockElseIf () {
    let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');
    if (year < 2015) {
        alert( 'Это слишком рано...' );
    } else if (year > 2015) {
        alert( 'Это поздновато' );
    } else {
        alert( 'Верно!' );
    }
}

function ternaryOperaror () {
    let age = +prompt('Сколько вам лет?', '')
    let accessAllowed = (age > 18) ? true : false;

    (accessAllowed) ? 
        document.getElementById("age").innerHTML = `<p style="color: green;">Вы старше 18 лет. Вам ${age} лет. Доступ открыт</p>`:
        document.getElementById("age").innerHTML = `<p style="color: red;"> Вы младше 18 лет. Вам ${age} лет. Доступ закрыт</p>`;

    alert(`Значение переменной 'accessAllowed' - ${accessAllowed}`)
}

function remove (sw) {
    if (sw == 'primer') {
        document.getElementById('primer').innerHTML = "";
    } else if (sw == 'check_name') {
        document.getElementById('check_name').innerHTML = "";
    } else if (sw == 'sign_p') {0
        document.getElementById('sign_p').innerHTML = "";
    } else if (sw == 'refactoring') {
        document.getElementById('refactoring').innerHTML = "";
    } else if (sw == 'refactorifelse') {
        document.getElementById('refactorifelse').innerHTML = '';
    }
}

function popupWindow (url, title, width, height) {
    let pos_left = window.screenLeft ? window.screenLeft : window.screenX;
    let pos_top = window.screenTop ? window.screenTop : window.screenY;
    console.log(`pos_left - ${pos_left}; pos_top - ${pos_top}`)
    let left = pos_left + (window.innerWidth / 2) - (width / 2);
    let top = pos_top + (window.innerHeight / 2) - (height / 2);
    console.log(`left - ${left}; top - ${top}`)
    
    return window.open(url, title, 'toolbar=no, location=no, directories=no, status=yes, menubar=no,scrollbars=yes, resizable=yes, copyhistory=no, width=500, height=600, top=' + top + ', left=' + left);
}
// function popupWindow(url, title, w, h) {
//     var left = (screen.width/2)-(w/2);
//     var top = (screen.height/2)-(h/2);
//     return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
//   }

// Решение для задач

function checkMe () {
    let response = confirm('Выведется ли alert?\n if ("0") alert("Привет");', '')
    let answer = response ? 'Правильно, выведется': 'Не верно (строка "0" – не пустая).'
    alert(answer)
}

function checkNameJava () {
    let response = prompt("Какое «официальное» название JavaScript?", "")
    if (response == 'ECMAScript') {
        document.getElementById('check_name').innerHTML = `<p style="color: green;">Верно!</p><button type="submit" onclick="remove('check_name')">Скрыть</button>`
    } else {
        document.getElementById('check_name').innerHTML = `<p style="color: red;">Не знаете? “ECMAScript”!</p><button type="submit" onclick="remove('check_name')">Скрыть</button>`
    }tById('check_name').innerHTML = `<p style="color: red;">${answer}</p><button type="submit" onclick="remove('check_name')">Скрыть</button>`
}

function sign () {
    let number = prompt("Введите число", "")
    if (number > 0) {
        alert(1);
    } else if (number == 0) {
        alert(0);
        // document.getElementById('sign_p').innerHTML = `<p>0</p><button type="submit" onclick="remove('sign_p')">Очистить</button>`
    } else {
        alert(-1);
    }
}

function refactorIf () {
    document.getElementById('refactoring').innerHTML = `<div class="flex box-console"><p>let result = (a + b < 4) ? 'Мало' : 'Много';</p></div>
    <p><button type="submit" onclick="remove('refactoring')">Очистить</button></p>`
}

function refactorIfElse () {
    document.getElementById('refactorifelse').innerHTML = `<div class="flex box-console">
    <p>let result = (login == "Сотрудник") ? 'Привет' :</p>
    <p>(login == "Директор") ? 'Здравствуйте' :</p>
    <p>(login == "") ? 'Нет логина : '';</p></div>
    <p><button type="submit" onclick="remove('refactorifelse')">Очистить</button></p>`
}