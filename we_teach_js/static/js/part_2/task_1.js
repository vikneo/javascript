// alert("данная страница еще в разработке")
function remove (sw) {
    if (sw == 'prim') {
        document.getElementById('prim').innerHTML = "";
    }
}

function windowTest () {
    window.winFunc();
}

function winFunc () {
    alert("Глобальные функции доступны как методы глобального объекта");
    document.getElementById('prim').innerHTML = `<br><div  class="size-of-hidden"><b><p>function windowTest () {</p><p style="padding-left: 20px;">window.winFunc();</p><p>}</p>
    <br><p>function winFunc () {</p><p style="padding-left: 20px;">alert("Глобальные функции доступны как методы глобального объекта");</p><p>}</p></b>
    <button class="button-color" type="submit" onclick="remove('prim')">Очистить</button></div>`;
}

function widowWidth () {
    alert(`Ширина окна браузера ${window.innerWidth}px\nВысота окна браузера     ${window.innerHeight}px`);
}