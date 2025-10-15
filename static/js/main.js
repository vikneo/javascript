function clock() {
    let date = new Date()

    let monthhArray = ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"]
    let weekDay     = ["Вск", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"]

    let year        = date.getFullYear()
    let day         = date.getDate()
    let hour        = date.getHours()
    let minute      = date.getMinutes()
    let second      = date.getSeconds()

    let month       = monthhArray[date.getMonth()]
    let week        = weekDay[date.getDay()]

    if (day < 10) day       = `0${day}`
    if (hour < 10) hour     = `0${hour}`
    if (minute < 10) minute = `0${minute}`
    if (second < 10) second = `0${second}`

    let title = document.querySelector(".title")
    title.innerHTML = `
    <p class="time-upload">
    <span style="padding-right: 25px; color: brown; font-size: smaller">
    ${year}г. ${month} ${day} ${week}
    </span>
    <span style="padding-left: 20px; font-size: 25px; color: aqua;">
    ${hour}:${minute}:${second}
    </span>
    </p>
    `
}

setInterval(clock, 1000)
