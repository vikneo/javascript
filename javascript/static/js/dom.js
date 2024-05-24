// Создать div
let div = document.createElement('div');
// Добавить к нему класс wrapper
div.classList.add('wrapper');
// Поместить его внутрь тега body
const body = document.querySelector('body');
body.appendChild(div);
// Создать заголовок H1 "DOM (Document Object Model)"
const header = document.createElement('h1');
header.textContent = "DOM (Document Object Model)";

// Добавить H1 перед div с классом wrapper
div.insertAdjacentElement('beforebegin', header);
// Создать список <ul></ul>
// Добавить в него 3 элемента с текстом "один, два, три"
const ul = `
    <ul>
        <li>один</li>
        <li>два</li>
        <li>три</li>
    </ul>
`;
// Поместить список внутрь элемента с классом wrapper
div.innerHTML = ul;

// ==================================================
// Создать изображение
const img = document.createElement('img');
// Добавить следующие свойства к изображению
// 1. Добавить атрибут source
img.src = 'https://media.istockphoto.com/id/1173897482/ru/фото/подводный-дайвер-в-мелкой-лагуне.jpg?s=1024x1024&w=is&k=20&c=cv2gjKrI0aqjnzHLcvUDNU5hJvkdNKZH1ggleF3OUGU='
// 2. Добавить втрибут width соо щначением 240
img.width = 240;
// 3. Добавить класс super
img.classList.add('super');
// 4. Добавить свойство alt со значением "Diving"
img.alt = "Diving";
// Поместить изображение внутрь элемента с классом wrapper
div.appendChild(img);
// Используя HTML строку, создать DIV с классом "pDiv" + с 2-мя параграфами
const elemHTML = `
<div class='pDiv'>
    <p>Параграф 1</p>
    <p>Параграф 2</p>
</div>
`
// Поместить этот DIV до элемента <ul></ul>
const ulList = div.querySelector('ul');
ulList.insertAdjacentHTML('beforebegin', elemHTML);
// Добавить для 2-го параграфа класс text
const pDiv = document.querySelector('.pDiv');
pDiv.children[1].classList.add('text');
pDiv.children[1].innerText = 'Параграф 2 (class text)';
//  Удалить 1-й параграф
pDiv.firstElementChild.remove();
//   ИЛИ
// pDiv.children[0].remove();

// ========================================================
// Создать функцию generateAutoCard,
// которая принимает 3 аргумента: brand, color, year
const generateAutoCard = (brand, color, year) => {
    const curDate = new Date();
    const cueYear = curDate.getFullYear()
    return `
    <div class="autoCard">
        <h2>${brand.toUpperCase()} ${year}</h2>
        <p>Автомобиль ${brand} - ${year} года. Возраст авто - ${cueYear - year} лет.</p>
        <p>Цвет: ${color}</p>
    </div>
        `;
}

// Функция должна возвращать разметку HTML:
// <div class="autoCard">
// <h2>${brand} ${year}</h2>
// <p>Автомобиль ${brand} - ${year} года. Возраст авто - </p>
// </div>

// Создать новый DIV с классом autos
const carsDiv = document.createElement('div');
carsDiv.classList.add('autos');
// Создать 3 карточки авто, используя функцию generateAutoCard
const carsList = [
    {brand: 'Tesla', year: 2015, color: 'Красный'},
    {brand: 'Lexus', year: 2016, color: 'Серебристый'},
    {brand: 'Nissan', year: 2012, color: 'Черный'},
]

const carsHTML = carsList.map(car => {
    return generateAutoCard(car.brand, car.color, car.year);
}).join('');

// Поместить эти 3 карточки внутрь DIV с классом autos
carsDiv.innerHTML = carsHTML;
console.log(carsDiv)
// Поместить DIV с классом autos на страницу DOM -до DIV с классом wrapper
div.insertAdjacentElement('beforebegin', carsDiv);

// Добавить кнопку Удалить на каждую карточку авто
// Добавить к кнопке скласс btn
const btnHTML = `<button type='button' class='btn'>Удалить</button>`
// Поместить кнопку с классом btn внутрь элемента с классом autoCard
const divAutoCards = document.querySelectorAll('.autoCard');
divAutoCards.forEach(btnDel => {
    btnDel.insertAdjacentHTML('beforeend', btnHTML);
})

// При клике на кнопку - удалять карточку из структуры DOM
// 1. Выбрать все кнопки
const buttons = document.querySelectorAll('.btn');

// 2. Создать функция удаления
function handleClick(e) {
    const currentButton = e.currentTarget;
    currentButton.closest('.autoCard').remove();
    console.log(currentButton)
}

// 3. Использовать цикл - чтобы повесить обработчик события на каждую кнопку
buttons.forEach(button => {
    button.addEventListener('click', handleClick);
});
    

