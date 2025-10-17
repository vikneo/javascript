function clock() {
    let date = new Date()

    let monthhArray = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сенября", "октября", "ноября", "декабря"]
    let weekDay     = ["Вск", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"]

    let year        = date.getFullYear()
    let day         = date.getDate()
    let hour        = date.getHours()
    let minute      = date.getMinutes()
    let second      = date.getSeconds()

    let month       = monthhArray[date.getMonth()]

    if (day < 10) day       = `0${day}`
    if (hour < 10) hour     = `0${hour}`
    if (minute < 10) minute = `0${minute}`
    if (second < 10) second = `0${second}`

    let title = document.querySelector(".title")
    title.innerHTML = `
    <div class="flex clock">
        <div class="time-block">${hour}:${minute}:${second}</div>
        <div class="day-block">${day} ${month} ${year}г.</div>
    </div>
    `
}

setInterval(clock, 1000)

document.getElementById('theme-toggle').addEventListener('click', function () {
  document.body.classList.toggle('dark-theme');
});