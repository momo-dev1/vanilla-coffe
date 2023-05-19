import API from '../services/API.js';
import ProductItem from './ProductItem.js';

export default class MenuPage extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' })

        const styles = document.createElement("style")
        this.root.appendChild(styles)
        async function loadCss() {
            const req = await fetch("/components/MenuPage.css")
            const css = await req.text()
            styles.textContent = css
        }
        loadCss()
    }


    // method is called automatically by the browser when the element is inserted into the DOM
    connectedCallback() {
        const template = document.getElementById("menu-page-template")
        const content = template.content.cloneNode(true)
        this.root.appendChild(content)
    }
}

customElements.define("menu-page", MenuPage);