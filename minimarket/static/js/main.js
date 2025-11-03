let goodsArray = [
    {
        "id": 1,
        "name": "Смартфон Tecno",
        "price": 12000,
        "count": 12,
        "cart_count": 0,
        "cart_discount": 0,
        "cart_price": 0,
    },
    {
        "id": 2,
        "name": "Телевизор Samsung",
        "price": 20000,
        "count": 8,
        "cart_count": 0,
        "cart_discount": 0,
        "cart_price": 0,
    },
    {
        "id": 3,
        "name": "Стиральная машина Indesit",
        "price": 32000,
        "count": 5,
        "cart_count": 0,
        "cart_discount": 0,
        "cart_price": 0,
    }
]

let userList

let myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
    keyboard: false
})

if (!localStorage.getItem('goods')) {
    localStorage.setItem('goods', JSON.stringify(goodsArray))
}

update_goods()

table1.onclick = function(e) {
    if (e.target.tagName != 'TH') return

    let th = e.target
    sortTable(th.cellIndex, th.dataset.type, 'table1')
}
table2.onclick = function(e) {
    if (e.target.tagName != 'TH') return

    let th = e.target
    sortTable(th.cellIndex, th.dataset.type, 'table2')
}


function searche() {
    // Функция возвращает объект с массивом названий полей для поиска
    let options = {
        valueNames: ['name', 'price']
    }

    return options
}

function sortTable(colNum, type, id) {
    // Функция позволяет отсортировать данные таблицы по названию колонок

    let elem = document.getElementById(id)
    let tbody = elem.querySelector('tbody')
    let rowsArray = Array.from(tbody.rows)
    let compare

    switch(type) {
        case 'number':
            compare = function(rowA, rowB) {
                return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML
            }
            break
        case 'string':
            compare = function(rowA, rowB) {
                return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1: -1
            }
            break
    }
    rowsArray.sort(compare)
    tbody.append(...rowsArray)
}

function update_goods() {
    let result_price = 0
    let tbody = document.querySelector('.list')
    tbody.innerHTML = ""
    document.querySelector('.cart').innerHTML = ""

    let goods = JSON.parse(localStorage.getItem('goods'))
    if(goods.length) {
        table1.hidden = false
        table2.hidden = false

        for (let i = 0; i < goods.length; i++) {
            tbody.insertAdjacentHTML('beforeend',
                `
                <tr class="align-middle">
                    <td>${i + 1}</td>
                    <td class="name">${goods[i].name}</td>
                    <td class="price">${goods[i].price}</td>
                    <td>${goods[i].count}</td>
                    <td><button class="good_delete btn btn-danger" data-delete="${goods[i].id}" data-name="${goods[i].name}">&#10006;</button></td>
                    <td><button class="good_delete btn btn-info" data-goods="${goods[i].id}" data-name="${goods[i].name}">&#10149;</button></td>
                </tr>
                `
            )

            if(goods[i].cart_count > 0) {
                goods[i].cart_price = goods[i].cart_count * goods[i].price - (goods[i].cart_count * goods[i].price * goods[i].cart_discount) * 0.01
                result_price += goods[i].cart_price

                document.querySelector('.cart').insertAdjacentHTML('beforeend', 
                    `
                    <tr class="align-middle">
                        <td>${i + 1}</td>
                        <td class="price_name">${goods[i].name}</td>
                        <td class="price_one">${goods[i].price}</td>
                        <td class="price_count">${goods[i].cart_count}</td>
                        <td class="price_discount">
                            <input data-goodid="${goods[i].id}" type="text" value="${goods[i].cart_discount}" min="0" max="100">
                        </td>
                        <td>${goods[i].cart_price}</td>
                        <td><button class="good_delete btn btn-danger" data-delete="${goods[i].id}">&#10006;</button></td>
                    </tr>
                    `
                )
            }
        }
        userList = new List('goods', searche())
    } else {
        table1.hidden = true
        table2.hidden = true
    }
    document.querySelector('.price_result').innerHTML = result_price + ' &#8381;'
}

document.querySelector('button.add_new').addEventListener('click', function(e) {
    // Функция добавления товара в магазин.
    // 
    let name = document.getElementById('good_name').value
    let price = document.getElementById('good_price').value
    let count = document.getElementById('good_count').value

    if (name && price && count) {
        document.getElementById('good_name').value = ''
        document.getElementById('good_price').value = ''
        document.getElementById('good_count').value = '1'

        let goods = JSON.parse(localStorage.getItem('goods'))
        goods.push({
            "id": goods.length + 1,
            "name": name,
            "price": price,
            "count": count,
            "cart_count": 0,
            "cart_discount": 0,
            "cart_price": 0,
        })
        localStorage.setItem('goods', JSON.stringify(goods))
        update_goods()

        myModal.hide()
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Ошибка...',
            text: 'Заполнены не все поля!',
        })
    }
})

document.querySelector('.list').addEventListener('click', function(e) {
    // Функция выбирает товар по ID и удаляет его из массива
    
    if(!e.target.dataset.delete) return
    let name_good = e.target.dataset.name
    
    Swal.fire({
        icon: "question",
        title: `Вы действительно хотите удалить "${name_good}"?`,
        showCancelButton: true,
        cancelButtonColor:"#dc3545",
        cancelButtonText: "Отмена",
        confirmButtonColor: "rgb(53 163 253)",
        confirmButtonText: "Да",
    }).then((result) => {
        if(result.isConfirmed) {
            let goods = JSON.parse(localStorage.getItem("goods"))

            for(let i = 0; i < goods.length; i++) {
                if(goods[i].id === +e.target.dataset.delete) {        
                    goods.splice(i, 1)
                    localStorage.setItem('goods', JSON.stringify(goods))
                    update_goods()
                }
            }
            Swal.fire({
                title: `"${name_good}" удален!`,
                icon: "success",
                draggable: true
            })
        }
    })
})


document.querySelector('.list').addEventListener('click', function(e) {
    // Функция для добавление товаров в корзину

    let goods = JSON.parse(localStorage.getItem('goods'))
    if (!e.target.dataset.goods) return

    for (let i = 0; i < goods.length; i++) {
        if (goods[i].count > 0 && goods[i].id === +e.target.dataset.goods) {
            goods[i].count -= 1
            goods[i].cart_count += 1
            localStorage.setItem('goods', JSON.stringify(goods))
            update_goods()
        }
    }
})

document.querySelector('.cart').addEventListener('click', function(e) {
    // Функция для удаление товара из карзины

    let goods = JSON.parse(localStorage.getItem('goods'))
    if (!e.target.dataset.delete) return

    for (let i = 0; i < goods.length; i++) {
        if (goods[i].cart_count > 0 && goods[i].id === +e.target.dataset.delete) {
            goods[i].count += 1
            goods[i].cart_count -= 1
            localStorage.setItem('goods', JSON.stringify(goods))
            update_goods()
        }
    }
})

document.querySelector('.cart').addEventListener('input', function(e) {
    // Функция подсчитывает стоимость товара в корзине с учетом скидки

    if (!e.target.dataset.goodid) return

    let goods = JSON.parse(localStorage.getItem('goods'))

    for(let i = 0; i < goods.length; i++) {
        if (goods[i].id === +e.target.dataset.goodid) {
            goods[i].cart_discount = e.target.value
            localStorage.setItem('goods', JSON.stringify(goods))
            update_goods()

            let input = document.querySelector(`[data-goodid="${goods[i].id}"]`)
            input.focus()
            input.selectionStart = input.value.length
        }
    }
})
