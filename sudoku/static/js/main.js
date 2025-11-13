let factArrayNumber = [];

function generateArrayNumber() {
    for (let i = 0; i < 9; i++) {
        let rowNumber = [];
        for (let num = 1; num <= 9; num++) {
            rowNumber.push(num);
        }

        factArrayNumber.push(rowNumber);
    }
}

/**
 * Создаются поля с числами для игры Судоку
 */
function createdFielGame() {
    let box = document.getElementById("sudoku")

    for (row = 0; row < factArrayNumber.length; row++) {
        for (let i = 0; i < factArrayNumber[row].length; i++) {
            let div = document.createElement("div")
            div.className = "sudoku_field";
            div.innerHTML = factArrayNumber[row][i];
            box.appendChild(div);
        }
    }
}

generateArrayNumber()
createdFielGame()
console.log(factArrayNumber);
