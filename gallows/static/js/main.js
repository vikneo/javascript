const setWords = JSON.parse(localStorage.getItem("setWords"))
const alphabetObj = JSON.parse(localStorage.getItem("alphabet"))
const alphabet = alphabetObj['alphabet']
// let count = alphabetObj['count']
let count = 0;

let random_word = setWords[Math.ceil(Math.random() * setWords.length)];
// let random_word = "порошок"; // for debug
let word = random_word.split("");

function generateWord() {

    let grid = document.querySelector(".word-block");
    grid.style.gridTemplateColumns = `repeat(${word.length}, 1fr)`;
    grid.style.color = `blue`;
    
    for (let i = 0; i < word.length; i++) {
        let div = document.createElement("div");
        div.id = i + 1;
        div.className = 'element';
        div.innerHTML = "&#x1F637;" //word[i]
        grid.appendChild(div);
    }
}

function createdFieldAlphabet() {
    let alpField = document.querySelector(".alphabet-field");
    alpField.style.gridTemplate = `repeat(3, 14px) / repeat(${alphabet.length / 3}, 13.8px)`;
    alpField.style.rowGap = "10px"

    for(let i = 0; i < alphabet.length; i++) {
        let div = document.createElement("div");

        div.id = i + 1;
        div.className = "alphabet";
        div.innerHTML = alphabet[i]
        div.style = "display: none"
        alpField.appendChild(div)

    }
}

document.querySelector(".input").addEventListener("input", function(e) {
    let flag = false;
    let sym = e.target.value;
    let elems = document.querySelectorAll(".element");
    let fieldAlpha = document.querySelectorAll(".alphabet")
    let openSymbol;

    if (sym === "") return;
    // if (alphabet.indexOf(sym.toUpperCase()) === -1) {
    //     e.target.value = '';
    //     return;q
    // }
    
    fieldAlpha.forEach((symbol) => {
        if (symbol.innerHTML === sym.toUpperCase()) {
            // symbol.style.display = "block";
            symbol.style.backgroundColor = 'grey';
            symbol.style.color = 'white';
            openSymbol = symbol;
        }
    })

    for (let i = 0; i < word.length; i++) {
        if (word[i].toLowerCase() === sym.toLowerCase()) {

            for (let elem of elems) {
                if (+elem.id == i + 1) {
                    elem.innerHTML = word[i].toUpperCase();
                    elem.className = "element back";
                    elem.style.transform = "rotateX(360deg)";
                    elem.style.color = "black";
                    elem.style.backgroundColor = "white";
                    flag = true
                }
            }
        }
    }
    setInterval(() => {
        e.target.value = ''
    }, 1000);

    if (!flag) {
        // if (openSymbol.style.display === "block") return;
        openSymbol.style.display = "block";
        count++;
        console.log("Рисуем виселицу")
        showGallows(count);
        localStorage.setItem("alphabet", JSON.stringify({"alphabet": alphabet, "count": count}))
    }
})

let stylus = caffold()

function showGallows(pos) {
    // Рисуем виселицу из не правильно отгаданных букв
    console.log(count)
    switch (pos) {
        case 1: 
        // рисуем левый столб
            stylus.fillStyle = "#666262"
            stylus.fillRect(100, 40, 6, 110);
            break;
        case 2: 
        // рисуем перекладину
            stylus.strokeRect(106, 41, 66, 2);
            stylus.strokeStyle = "#666262"
            stylus.moveTo(104, 66);
            stylus.lineTo(130, 42);
            stylus.lineWidth = 3;
            stylus.stroke();
            break;
        case 3: 
        // рисуем петлю
            stylus.strokeRect(170, 42, 1, 22);
            break;
        case 5: 
        // рисуем голову
            stylus.beginPath();
            stylus.fillStyle = "#1f1e1eff"
            stylus.arc(171, 72, 7, 0, Math.PI * 2, true);
            stylus.fill();
            stylus.closePath();
            break;
        case 6: 
        // рисуем туловище
            stylus.moveTo(171, 78);
            stylus.quadraticCurveTo(185, 100, 170, 110);
            stylus.quadraticCurveTo(155, 100, 170, 78);
            stylus.fill();
            break;
        case 7: 
        // рисуем руки
        // левая рука
            stylus.moveTo(168, 79);
            stylus.quadraticCurveTo(160, 88, 152, 108);
            stylus.quadraticCurveTo(171, 86, 168, 78);
            stylus.fill();
        // правая рука
            stylus.moveTo(172, 79);
            stylus.quadraticCurveTo(180, 86, 188, 108);
            stylus.quadraticCurveTo(173, 90, 172, 78);
            stylus.fill();
            break;
        case 8: 
        // рисуем ноги
        // левая нога
            stylus.moveTo(164, 106);
            stylus.quadraticCurveTo(160, 110, 156, 126);
            stylus.quadraticCurveTo(173, 112, 164, 106);
            stylus.fill();
        // правая нога
            stylus.moveTo(176, 106);
            stylus.quadraticCurveTo(181, 110, 186, 126);
            stylus.quadraticCurveTo(166, 112, 176, 106);
            stylus.fill();
            break;
        case 4: 
        // рисуем стул
            stylus.fillRect(148, 126, 47, 2);
            stylus.fillRect(155, 128, 2, 20);
            stylus.fillRect(185, 128, 2, 20);
            break;
        case 9:
        // затираем стул
            stylus.clearRect(148, 126, 47, 2);
            stylus.clearRect(155, 128, 2, 20);
            stylus.clearRect(185, 128, 2, 20);
            break;
    }
}

generateWord()
createdFieldAlphabet()
