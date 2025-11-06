const setWords = JSON.parse(localStorage.getItem("setWords"))
const alphabet = JSON.parse(localStorage.getItem("alphabet"))

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

    if (sym === "") return;
    
    fieldAlpha.forEach((symbol) => {
        if (symbol.innerHTML === sym.toUpperCase()) {
            symbol.style.display = "block";
            symbol.style.backgroundColor = 'grey';
            symbol.style.color = 'white';
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
    let _id = setInterval(() => {
        e.target.value = ''
    }, 3000);

    if (!flag) {
        console.log("Рисуем виселицу")
        // showGallows();
    }
})

generateWord()
createdFieldAlphabet()


