import CartItem from './CartItem.js';

export default class OrderPage extends HTMLElement {
    constructor() {
        super();
    }
}

customElements.define("order-page", OrderPage);