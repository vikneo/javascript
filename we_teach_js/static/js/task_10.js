function result () {
    let year = prompt('Какой сегодня год? ', "")
    let data = new Date()
    let full_year = data.getFullYear()
    if (+year == full_year) {
        document.getElementById("primer").innerHTML = 
        `<p>let year = prompt('Какой сегодня год? ', "")</p><p>let data = new Date()</p>
        <p>let full_year = data.getFullYear()</p><p>if (+year == full_year) {</p><p style="padding-left: 20px;">'И это правильно!'</p><p>}else {</p>
        <p style="padding-left: 20px;">alert("Советую еще подумать!")</p><p>}</p>
        <button type="submit" onclick="remove()">Стереть</button>`
        alert("И это правильный ответ!")
    } else {
        alert("Советую еще подумать!")
    }
}

function remove (){
    document.getElementById('primer').innerHTML = ""
}