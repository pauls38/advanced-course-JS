
    'use strict'

const products = [
    {
        id: 1,
        title: 'Notebook',
        price: 2000 ,
        image: './img/laptop.png'
    },
    {
        id: 2,
        title: 'Mouse',
        price: 20 ,
        image: './img/mouse.png'
    },
    {
        id: 3,
        title: 'Keyboard',
        price: 200,
        image: './img/keyboard.png' 
    },
    {
        id: 4,
        title: 'Gamepad',
        price: 50,
        image: './img/joystick.png'
    },
];

//Функция для формирования верстки каждого товара
const renderProduct = ({title, price, image, id}) => {
    return `<div id="${id}" class="product-item">
                <img src="${image}" width='150px' height='100px'>
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(product => renderProduct(product)).join('');
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList;
};

renderPage(products); 
