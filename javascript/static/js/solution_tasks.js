// ================ TASK 1 =========================

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

// ================ TASK 2 =========================

// 2. Создать массив который содержит уникальные значения
// Вывод => ['kiwi', 'apple', 'orange']

const myfruits = ['kiwi', 'apple', 'orange', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];

const setFruit = (list) => {
    const unique = {};
    list.forEach(f => unique[f] = true);
    return Object.keys(unique);
}

console.log(setFruit(myfruits))

