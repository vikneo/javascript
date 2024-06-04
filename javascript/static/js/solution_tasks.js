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

// ================ TASK 3 =========================

// 3. Создать функцию, которая сгрупирует студентов по возрасту.
// На выходе получить объект, где ключ - возраст,
// а значение - массив студентов

const students =[
    {name: 'Alex', age: 25},
    {name: 'Mike>', age: 28},
    {name: 'Masha', age: 25},
    {name: 'Stas', age: 18},
];

const groupStudents = (list) => {
    const gruped = {};
    list.forEach(student => {
        if (!gruped[student.age]) {
            gruped[student.age] = [student];
        } else {
            gruped[student.age].push(student);   
        }
    });
    return gruped;
}

console.log(groupStudents(students))

// ================ TASK 4 =========================

// 4. Написать функцию, которая принимает два аргумента:
// массив из уникальных целыъ чисел и сумму в виде целого числа.
// Если сумма двух любых чисел массива из аргумета равна числу, которое
// приходит вторым аргументом, функция должна вернуть новый массив
// из этих двух чисел в любом порядке.
// Если рещения нет, вернуть пустой массив.

const myNumbers = [3, 5, -4, 8, 11, 1, -1, 6, 4]
const sum = 10;

const countSum = (list, target) => {
    const count = [];
    for (let i = 0; i < list.length; i++) {
        for (let j = i + 1; j < list.length; j++) {
            if (list[i] + list[j] === target) {
                count.push([list[i], list[j]]);
            };
        };
    };
    return count;
}

console.log(countSum(myNumbers, sum));

// ================ TASK 5 =========================

// 5. Получить единый массив из любимых пицц каждого друга

const friends = [
    {name: 'Alex', pizzas: ['cheese', 'pepperoni']},
    {name: 'Mike', pizzas: ['salami', 'margarita']},
    {name: 'Stas', pizzas: ['meat']},
    {name: 'Anna', pizzas: ['fish']},
]

const pizzas = friends.reduce((accum, current) => {
    return [...accum, ...current.pizzas];
}, []);

console.log(pizzas)