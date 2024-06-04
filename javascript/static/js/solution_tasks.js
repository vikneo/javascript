// 1. Сколько раз каждый элемент встречается в массиве:
// Вывод: => {kiwi: 3, apple: 2, oramge: 2}

const fruits = ['kiwi', 'apple', 'orange', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];

const countFruit = (list) => {
    const arrayFruits = {};
    list.forEach(f => {
        if (!arrayFruits[f]) {
            arrayFruits[f] = 1;
        } else {
            arrayFruits[f] ++;
        };
    });
    return arrayFruits;
}

console.log(countFruit(fruits))