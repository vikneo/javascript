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