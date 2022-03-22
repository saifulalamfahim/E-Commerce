import Error404Screen from "./screens/Error404Screen.js";
// import error404Screen from "./screens/Error404Screen.js";
import homeScreen from "./screens/homeScreen.js";
import ProductScreen from "./screens/ProductScreen.js";
import { parseRequestUrl } from "./utils.js";



const routes = {
    '/': homeScreen,
    '/product/:id': ProductScreen,
};



const router = () => {
    const request = parseRequestUrl();
    const parseUrl = 
    (request.resource ? `/${request.resource}`: '/') +
    (request.id ? '/:id' : '') +
    (request.verb ? `/${request.verb}`:'');
    const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;
    const main = document.getElementById('main-container');
    main.innerHTML = screen.render();
}

window.addEventListener('load', router);
window.addEventListener('hashchange', router);
window.addEventListener('hashchange', router);


