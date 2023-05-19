import { addToCart } from "../services/Order.js";

export default class ProductItem extends HTMLElement {
    constructor() {
        super();
    }
}

customElements.define("product-item", ProductItem);
