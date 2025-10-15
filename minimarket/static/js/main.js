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

if (!localStorage.getItem('goods')) {
    localStorage.setItem('goods', JSON.stringify(goodsArray))
}

let myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
    keyboard: false
})

document.querySelector('button.add_new').addEventListener('click', function(e) {
    let name = document.getElementById('good_name').value
    let price = document.getElementById('good_price').value
    let count = document.getElementById('good_count').value

    if (name && price && count) {
        document.getElementById('good_name').value = ''
        document.getElementById('good_price').value = ''
        document.getElementById('good_count').value = '1'

        let goods = JSON.parse(localStorage.getItem('goods'))
        goods.push({
            "id": goods.length,
            "name": name,
            "price": price,
            "count": count,
            "cart_count": 0,
            "cart_discount": 0,
            "cart_price": 0,
        })
        localStorage.setItem('goods', JSON.stringify(goods))
        // update_goods()

        myModal.hide()
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Ошибка...',
            text: 'Заполнены не все поля!',
        })
    }
})

update_goods()

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
                    <td><button class="good_delete btn btn-danger" data-delete="${goods[i].id}">&#10006;</button></td>
                    <td><button class="good_delete btn btn-info" data-goods="${goods[i].id}">&#10149;</button></td>
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
    } else {
        table1.hidden = true
        table2.hidden = true
    }
    document.querySelector('.price_result').innerHTML = result_price + ' &#8381;'
}