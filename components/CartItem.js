import { removeFromCart } from "../services/Order.js";

export default class CartItem extends HTMLElement {
    constructor() {
        super();
    }
}

customElements.define("cart-item", CartItem);