import API from './API.js'

const Store = {
    menu: null,
    cart: []
} 

const proxiedStore = new Proxy(Store, {})

export default proxiedStore;
