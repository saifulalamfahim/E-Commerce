// import data from '../data.js';

import axios from "axios";
import Rating from '../components/Rating';
import { hideloading, showloading } from "../utils";



const homeScreen ={
    render: async() =>{
        showloading();
// take data from from frontand (data.js)
        // const {products} = data;

// take data from backend (localhost 5000)
        const response = await axios({
            url: 'http://localhost:5000/api/products',
            headers: {
                'Content-Type' : 'application/json',
            },
        });
        hideloading();
        if(!response || response.statusText !== 'OK') {
            return `<div>Error in getting data</div>`;
        };
        const products = response.data;

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
                <div class="product-rating">
                ${Rating.render({
                    value: product.rating,
                text: `${product.numReviws} reviews`,
            })}
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