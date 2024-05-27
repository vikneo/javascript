// Создать тег h1
const h1 = document.createElement('h1')
// добавить текст "Объекты и масивы. Как правильно копировать!?"
h1.innerText = "Объекты и масивы. Как правильно копировать!?"
// Вставить его в тег body
const body = document.body
body.appendChild(h1);

// Создадим div
const div = document.createElement('div');
// Добавим ему класс wrapper
div.classList.add('wrapper');
// Добвим div после тег H1
body.appendChild(div);

const studentsHTML = `
    <p>
        <span>У нас есть масив студентов</span>
    </p>
    <p>
        <strong>
            const students = ['Мария', 'Сергей', 'Станислав', 'Василий'];
        </strong>
    </p>
    <p>
        Создаем переменную <b>group</b> и присваиваем ей масив со студлентами
    </p>
    <p>
        <strong>
            const groups = students;
        </strong>
    </p>
    <p>Меняем в масиве <b>group</b> элемент с индексом 0</p>
    <p><strong>group[0] = 'Николай'</strong></p>
    <hr>
    <p>Вывод на консоль</p>
    <p>
        console.log(students);<br>
        console.log(groups);<br><br>
        (4) ['Николай', 'Сергей', 'Станислав', 'Василий']<br>
        (4) ['Николай', 'Сергей', 'Станислав', 'Василий']<br>
    </p>
    <h4>Итог</h4>
    <p>
        Как показано на выводе поменялся и основной масив.
        Дело в том, что создав масив <b>"group"</b>, мы создали ссылку
        на масив <b>"students"</b>, а НЕ КОПИЮ объекта...
    </p>
    <h4>Продолжение в файле object_set.js</h4>
`;
div.innerHTML = studentsHTML;


// ## Дан масив
const students = ['Мария', 'Сергей', 'Станислав', 'Василий'];
console.log(students)

// Создаем копию масива
const group = students;
// Меняем в копии значение
group[1] = 'Алексей';

// Выводом будет:
//  (4) ['Мария', 'Алексей', 'Станислав', 'Василий']
//  (4) ['Мария', 'Алексей', 'Станислав', 'Василий']

// Как показано на выводе поменялся и основной масив
// Дело в том, что создав масив "group", мы создали ссылку
// на масив "students", а НЕ КОПИЮ объекта


//  Здесь нам поможет:
// ** Вариант 1 (метод slice)
const group2 = students.slice(); // можно передавать с аргументами slice(0, 4)
group2[0] = 'Николай';
// Выводом будет:
//  (4) ['Мария', 'Алексей', 'Станислав', 'Василий']
//  (4) ['Николай', 'Алексей', 'Станислав', 'Василий']


// ** Вариант 2 (метод concat)
const group3 = [].concat(students);
group3[2] = "Наталья";
// Выводом будет:
// (4) ['Мария', 'Алексей', 'Станислав', 'Василий']
// (4) ['Мария', 'Алексей', 'Наталья', 'Василий']


// ** Вариант 3 (метод spread)
const group4 = [...students];
group4[3] = 'Аноним';
// Выводом будет:
// (4) ['Мария', 'Сергей', 'Станислав', 'Василий']
// (4) ['Мария', 'Алексей', 'Станислав', 'Аноним']


// ** Вариант 4 (метод Array.from())
const group5 =Array.from(students);
group5[0] = 'Array'
// Выводом будет:
// (4) ['Мария', 'Сергей', 'Станислав', 'Василий']
// (4) ['Array', 'Алексей', 'Станислав', 'Василий']


//  ## ========= ОБъекты ===============

// Тоже самое относиться к объектам
const person = {
    name: 'Tom',
    age: 35
}

// Попробуем сделать копию
const student = person;
student.age = 100;
// Вывод, что объект person тоже поменялся
// {name: 'Tom', age: 100}
// {name: 'Tom', age: 100}


// Делаем копию
// ** Вариант 1 (метод Object.assign())
const fireman = Object.assign({}, person, {age: 32, height: "1.6m"});
// Вывод
// {name: 'Tom', age: 100}
// {name: 'Tom', age: 32, height: '1.6m'}


// ** Вариант 2 (оператор spread)
const worker = {...person};
worker.age = 60;
// Вывод
// {name: 'Tom', age: 100}
// {name: 'Tom', age: 60}

// Важно!
// Все методы для копирования масивов и объектов подразумевают 
// ВЕРХНЕУРОВНЕВОЕ копирование - не копирует вложенные люъекты!
// Для копирования с несколькими уровнями вложенности понадобится 
// метод cloneDeep библиотеки lodash

// ИЛИ есть вариант на уровне JS - JSON

const human = {
    name: "Martin",
    age: "28",
    social: {
        twitter: "@martin",
        ok: "vasilisk"
    }
}

const human2 = JSON.parse(JSON.stringify(human));
human2.social.ok = "was_is";

// Вывод на консоли:
console.log(human)
console.log(human2)