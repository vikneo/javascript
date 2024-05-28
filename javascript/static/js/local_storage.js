const h1 = document.createElement('h1');
h1.innerText = 'Local Storage - Как правильно использовать?';
const div = document.querySelector('.wrapper');
div.insertAdjacentElement('beforebegin', h1)


// Создаем пицу

const addItemsForm = document.querySelector('.add-items-form');
const itemsList = document.querySelector('.items-list');
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
    e.preventDefault();
    const text = e.target.item.value;
    const item = {
        text: text,
        checked: false
    }
    items.push(item);
    localStorage.setItem('items', JSON.stringify(items))
    displayItems(items, itemsList);
    this.reset(); // Перезагрузить форму после добавления объекта
}

function displayItems(ingridients, ingridientsList) {
    ingridientsList.innerHTML = ingridients.map((ingridient, index) => {
        return `<li>
        <input type='checkbox' id='item_${index}' data-index='${index}' ${ingridient.checked ? 'checked' : ''}/>
        <label for='item_${index}'>${ingridient.text}</label>
        </li>
        `;
    }).join('');
}

function toggleClick(e) {
    if (!e.target.matches('input')) return;   // Фильтруем все теги кроме "input"
    const element = e.target.dataset.index;
    items[element].checked = true;
    localStorage.setItem('items', JSON.stringify(items));
    displayItems(items, itemsList);
}

addItemsForm.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleClick);
displayItems(items, itemsList);
