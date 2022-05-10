import Error404Screen from "./screens/Error404Screen.js";
// import error404Screen from "./screens/Error404Screen.js";
import homeScreen from "./screens/homeScreen.js";
import ProductScreen from "./screens/ProductScreen.js";
import { hideloading, parseRequestUrl, showloading } from "./utils.js";

import bar from './bar.js';
import CartScreen from "./screens/CartScreen.js";
import SignInScreen from "./screens/SignInScreen.js";
import Header from "./components/Header.js";
import RegisterScreen from "./screens/RegisterScreen.js";
import ProfileScreen from "./screens/ProfileScreen.js";
import ShippingScreen from "./screens/ShippingScreen.js";
import PaymentScreen from "./screens/PaymentScreen.js";
import PlaceOrderScreen from "./screens/PlaceOrderScreen.js";

bar();



const routes = {
    '/': homeScreen,
    '/product/:id': ProductScreen,
    '/cart/:id': CartScreen,
    '/cart': CartScreen,
    '/signin': SignInScreen,
    '/register': RegisterScreen,
    '/profile': ProfileScreen,
    '/shipping': ShippingScreen,
    '/payment': PaymentScreen,
    '/placeorder': PlaceOrderScreen,
};



const router = async () => {
    showloading();
    const request = parseRequestUrl();
    const parseUrl = 
    (request.resource ? `/${request.resource}`: '/') +
    (request.id ? '/:id' : '') +
    (request.verb ? `/${request.verb}`:'');
    const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;
    const header = document.getElementById('header-container');
    header.innerHTML = await Header.render();
    await Header.after_render();
    const main = document.getElementById('main-container');
    main.innerHTML = await screen.render();
    if (screen.after_render) await screen.after_render();
    
    hideloading();
}

window.addEventListener('load', router);
window.addEventListener('hashchange', router);


