function variables () {
    alert("Для объявления переменных\nиспользуйте ключевое слово 'let'");
    document.getElementById("primer").innerHTML = "<p class='task-4-var'>Пример:<br><br>let message = 'Hello'<br> alert(message);</p>"
}

function comstante () {
    const COLOR_ORANGE = "#FF7F00";
    alert("Для объявления переменных\nиспользуйте ключевое слово 'const'\nПерекрасим блок в оранжевый цвет.")
    document.getElementById("primer_2").innerHTML = 
    "<p class='task-4-var-2' style='background-color: #FF7F00'><b>Пример:</b><br>const COLOR_ORANGE = '#FF7F00';<br>alert(COLOR_ORANGE);</p>"
}

function result () {
    let admin;
    let name = "Djon";
    admin = name;
    alert("Результат выполнения скрипта\nadmin=" + admin)
}

function correctNames () {
    let planetEarth = "Земля";
    let currentSiteUser = "Джон";
    alert("Корректные переменные:\nДля названия планеты: let planetEarth = 'Земля';\nДля текущего пользователя: let currentSiteUser = 'Джон';")
}
