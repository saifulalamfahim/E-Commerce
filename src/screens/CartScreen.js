import { getProduct } from "../api";
import { getCartItems, setCartItems } from "../localStorage";
import { parseRequestUrl } from "../utils";

const addToCart = (item, forceUpadate = false) =>{
    let cartItems = getCartItems();
    const existItem = cartItems.find(x => x.product === item.product);
    if (existItem) {
        cartItems = cartItems.map((x) => x.product === existItem.product ? item : x);
    } else {
        cartItems = [...cartItems, item];
    }
    setCartItems(cartItems);
}

const CartScreen = {
    after_render: () => {},
    render: async () => {
        const request = parseRequestUrl();
        if(request.id) {
            const product = await getProduct(request.id);
            addToCart({
                product: product._id,
                name: product.name,
                image: product.image,
                price: product.price,
                countInStock: product.countInStock,
                qty:1,
            });

        }
        return `<div>Cart Screen Dekha Lai</div>
        <div>${getCartItems().length}</div>
        `;
    },
}

export default CartScreen;