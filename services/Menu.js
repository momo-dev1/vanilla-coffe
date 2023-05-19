import API from './API.js';

export async function loadData() {
    app.store.menu = await API.fetchMenu()
}

export async function getProductById(id) {


    return null;
}