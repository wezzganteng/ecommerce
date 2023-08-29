import { createStore } from 'vuex';
import auth from './modules/auth'
import produk from "./modules/produk"
import brand from './modules/brand';
import kategori from './modules/kategori';
import cart from './modules/cart'
import order from './modules/order'

const store = createStore({
    state: {
    
    },
    modules: {
        auth,
        produk,
        brand,
        kategori,
        cart,
        order,
    }
});

export default store;