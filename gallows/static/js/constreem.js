const setingWords = ['кабачок', 'змеевик', 'бугорок', 'клиринг', 'самотёк', 'теремок', 'колодец', 'актриса', 'рамазан', 'тупость',
    'росинка', 'ромашка', 'кулинар', 'вредина', 'бастион', 'метелица', 'инженер', 'румянец', 'дубинка', 'камелия', 'пломбир', 
    'слизняк', 'комбайн', 'конюшня', 'медяшка', 'полночь', 'столица', 'комарик', 'подкова', 'фортуна', 'банщица', 'сигарка', 
    'форпост', 'ханство', 'сарафан', 'свинина', 'тетрадь', 'каземат', 'траверс', 'печение', 'разница', 'реквием', 'глухарь', 
    'партнёр', 'шляпник', 'снежина',  'джейлау',]

const alphabetKir = [
    "А", "Б", "В", "Г", "Д", "Е", "Ё", "Ж", "З", "И", "Й", 
    "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф", 
    "Х", "Ц", "Ч", "Ш", "Щ", "Ъ", "Ы", "Ь", "Э", "Ю", "Я"
]

if (!localStorage.getItem("setWords")) {
    localStorage.setItem("setWords", JSON.stringify(setingWords))
}

if (!localStorage.getItem("alphabet")) {
    localStorage.setItem("alphabet", JSON.stringify({"alphabet": alphabetKir, "count": 0}))
}


function caffold() {
    // Рисуем площадку для игрока

    const canvas = document.getElementById("gallows_field")

    if (canvas.getContext) {
        const ctx = canvas.getContext("2d")
        var gridSize = 10;  
        
        // // Отрисовка горизонтальных линий  
        // for (var x = 0; x < canvas.width; x += gridSize) {  
        //     ctx.moveTo(x, 0);  
        //     ctx.lineTo(x, canvas.height);  
        // }  
        // // Отрисовка вертикальных линий  
        // for (var y = 0; y <= canvas.height; y += gridSize) {  
        //     ctx.moveTo(0, y);  
        //     ctx.lineTo(canvas.width, y);
        // }
        // ctx.strokeStyle = '#414141ff';
        // ctx.strokeStyle = '#f3f2f2ff';
        // ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(50, 150);
        ctx.strokeRect(80, 150, 150, 5);
        ctx.strokeRect(50, 155, 180, 5);
        // ctx.lineWidth(5);
        ctx.strokeStyle = '#7a7373ff';

        return ctx

    } else {
        alert("Ваш браузер не поддерживает Canvas")
    }
}
