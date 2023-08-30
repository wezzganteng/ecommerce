import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Produk from '../views/Produk.vue'
import Brand from '../views/Brand.vue'
import Kategori from '../views/Kategori.vue'
import Register from '../views/Register.vue'
import SingleProduk from '../views/SingleProduk.vue'
import Checkout from '../views/CheckOut.vue'
import Cart from '../views/Cart.vue'
import Profile from '../views/Profile.vue'
import Order from '../views/Order.vue'
import Contact from '../views/Contact.vue'
const routes = [

    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: { requiresGuest: true },
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
        
    },
    {
        path: '/produk',
        name: 'Produk',
        component: Produk,
    },
    {
        path: '/brand',
        name: 'Brand',
        component: Brand,
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
    },
     {
        path: '/kategori',
        name: 'kategori',
        component: Kategori,
    },
    {
        path: "/SingleProduk/:slug",
        name: "SingleProduk",
        component: SingleProduk,
        props: true,
    },
    {
        path: '/checkout',
        name: 'Checkout',
        component: Checkout,
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart,
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
    },
    {
        path: '/order/:orderCode',
        name: 'Order',
        component: Order,
         props: true
    },
];
    const router = createRouter({
    history: createWebHistory(),
    routes,
    });

export default router;