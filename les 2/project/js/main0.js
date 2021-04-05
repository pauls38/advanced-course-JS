class ProductsList{
    constructor(container = '.products'){
        this.container = container;
        this.goods = [];
        this._fetchProducts();
    }

    _fetchProducts(){
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000, image: './img/laptop.png'},
            {id: 2, title: 'Mouse', price: 20, image: './img/mouse.png'},
            {id: 3, title: 'Keyboard', price: 200, image: './img/keyboard.png'},
            {id: 4, title: 'Gamepad', price: 50, image: './img/joystick.png'},
        ];
    }
   render() {
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const productObj = new ProductItem(product);
            block.insertAdjacentHTML('beforeend',productObj.render())
//            block.innerHTML += productObj.render();
        }
    }
    
}

class ProductItem{
	constructor(product){
		this.title = product.title;
		this.price = product.price;
		this.id = product.id;
		this.image = product.image;
		
	}

    render(){
		 return `<div class="product-item" data-id="${this.id}">
                <img src="${this.image}" width='150px' height='100px' alt="${this.title}">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
	}
}

let list = new ProductsList();
list.render();