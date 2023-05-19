import API from '../services/API.js';
import ProductItem  from './ProductItem.js';

export default class MenuPage extends HTMLElement {
    constructor() {
        super();
    }

}

customElements.define("menu-page", MenuPage);