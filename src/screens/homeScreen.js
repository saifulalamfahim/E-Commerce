// import data from '../data.js';



const homeScreen ={
    render: async() =>{
// take data from from frontand (data.js)
        // const {products} = data;

// take data from backend (localhost 5000)
        const response = await fetch('http://localhost:5000/api/products', {
            headers: {
                'Content-Type' : 'application/json',
            },
        });
        if(!response || !response.ok) {
            return `<div>Error in getting data</div>`;
        };
        const products = await response.json();

        return `
        <ul class="products">
        ${products.map( product => `
        <li>
                <div class="product">
                <a href="/#/product/${product._id}">
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/1">
                    ${product.name}
                    </a>
                </div>
                <div class="product-brand">
                ${product. brand}
                </div>
                <div class="product-price">
                  $${product.price}
                </div>
                </div>          
        </li>
        `
        )
    .join('\n')}
   
        `
    }
}

export default homeScreen;