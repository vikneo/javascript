const setWords = ['полнеба', 'потреба', 'ворожба', 'служба', 'метеослужба', 'дружба', 'диатриба', 'планшайба', 'надолба', 'катакомба', 'пломба', 'гекатомба', 'клумба', 'блямба', 'жадоба', 'худоба', 'стыдоба', 'жалоба', 'зазноба', 'хвороба', 'утроба', 'чащоба', 'чищоба', 'трущоба', 'пагуба', 'палуба', 'голуба', 'йоруба', 'стереотруба', 'волшба', 'свадьба', 'усадьба', 'городьба', 'ходьба', 'судьба', 'резьба', 'похвальба', 'пальба', 'стрельба', 'мольба', 'гульба', 'гоньба', 'бороньба', 'борьба', 'гурьба', 'косьба', 'просьба', 'татьба', 'селитьба', 'женитьба', 'молотьба', 'пастьба', 'голытьба', 'забава', 'держава', 'шалава', 'облава', 'булава']

let random_word = setWords[Math.ceil(Math.random() * setWords.length)]
let word = random_word.split("")

console.log(word)

let grid = document.querySelector(".grid")
grid.style.gridTemplateColumns = `repeat(${word.length}, 1fr)`;
grid.style.color = `blue`;

for (let i = 0; i < word.length; i++) {
    let div = document.createElement("div")
    div.className = 'element'
    div.innerHTML = "&ast;" //word[i]
    grid.appendChild(div)
}
console.log(grid)