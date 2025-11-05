const setWords = ['полнеба', 'потреба', 'ворожба', 'служба', 'метеослужба', 'дружба', 'диатриба', 'планшайба', 'надолба', 'катакомба', 'пломба', 'гекатомба', 'клумба', 'блямба', 'жадоба', 'худоба', 'стыдоба', 'жалоба', 'зазноба', 'хвороба', 'утроба', 'чащоба', 'чищоба', 'трущоба', 'пагуба', 'палуба', 'голуба', 'йоруба', 'стереотруба', 'волшба', 'свадьба', 'усадьба', 'городьба', 'ходьба', 'судьба', 'резьба', 'похвальба', 'пальба', 'стрельба', 'мольба', 'гульба', 'гоньба', 'бороньба', 'борьба', 'гурьба', 'косьба', 'просьба', 'татьба', 'селитьба', 'женитьба', 'молотьба', 'пастьба', 'голытьба', 'забава', 'держава', 'шалава', 'облава', 'булава']

let random_word = setWords[Math.ceil(Math.random() * setWords.length)];
// let random_word = "порошок"; // for debug
let word = random_word.split("");

let grid = document.querySelector(".grid");
grid.style.gridTemplateColumns = `repeat(${word.length}, 1fr)`;
grid.style.color = `blue`;

for (let i = 0; i < word.length; i++) {
    let div = document.createElement("div");
    div.id = i + 1;
    div.className = 'element';
    div.innerHTML = "&#x1F637;" //word[i]
    grid.appendChild(div);
}

document.querySelector(".input").addEventListener("input", function(e) {
    let flag = false;
    let sym = e.target.value;
    let elems = document.querySelectorAll(".element");

    if (sym === "") return;
    
    for (let i = 0; i < word.length; i++) {
        if (word[i].toLowerCase() === sym.toLowerCase()) {

            for (let j of elems) {
                if (+j.id == i + 1) {
                    j.innerHTML = word[i].toUpperCase();
                    j.className = "element back";
                    j.style.transform = "rotateX(360deg)";
                    j.style.color = "black";
                    j.style.backgroundColor = "white";
                    flag = true
                }
            }
        }
    }
    let _id = setInterval(() => {
        e.target.value = ''
    }, 1000);

    if (!flag) {
        console.log("Рисуем виселицу")
        // showGallows();
    }
})