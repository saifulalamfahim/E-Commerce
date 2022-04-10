import Error404Screen from "./screens/Error404Screen.js";
// import error404Screen from "./screens/Error404Screen.js";
import homeScreen from "./screens/homeScreen.js";
import ProductScreen from "./screens/ProductScreen.js";
import { parseRequestUrl } from "./utils.js";

import bar from './bar.js';
import CartScreen from "./screens/CartScreen.js";
import SignInScreen from "./screens/SignInScreen.js";

bar();



const routes = {
    '/': homeScreen,
    '/product/:id': ProductScreen,
    '/cart/:id': CartScreen,
    '/cart': CartScreen,
    '/signin': SignInScreen,
};



const router = async () => {
    const request = parseRequestUrl();
    const parseUrl = 
    (request.resource ? `/${request.resource}`: '/') +
    (request.id ? '/:id' : '') +
    (request.verb ? `/${request.verb}`:'');
    const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;
    const main = document.getElementById('main-container');
    main.innerHTML = await screen.render();
    await screen.after_render();
}

window.addEventListener('load', router);
window.addEventListener('hashchange', router);


