import { getProductById } from '../services/Menu.js';
import { addToCart } from '../services/Order.js';

export default class DetailsPage extends HTMLElement {
    constructor() {
        super();
    }

}

customElements.define("details-page", DetailsPage);