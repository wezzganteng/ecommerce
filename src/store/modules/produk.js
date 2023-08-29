import axios from "axios";

const produk = {
    namespaced: true,
    state: {
        dataProduk: [],
        singleProduk:[],
    },
    getters: {
        getProduk: (state) => state.dataProduk,
    },
    actions: {
        async fetchProduk({ commit }) {
            try{
                const data = await axios.get(
                    "https://ecommerce.olipiskandar.com/api/v1/product/latest/12"
                );
                commit("SET_PRODUK", data.data);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },

        async fetchSingleProduk({ commit } , slug) {
            try{
                const data = await axios.get(
                    `https://ecommerce.olipiskandar.com/api/v1/product/details/${slug}`
                );
                commit("SET_SINGLE_PRODUK", data.data['data']);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },

        async addToCart({ commit }, productId) {
            try {
                const response = await axios.post(
                "https://ecommerce.olipiskandar.com/api/v1/carts/add",
                {
                    "variation_id": productId,
                    "qty":  1,
                    "temp_user_id": null,
                }, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
                });
                commit("ADD_TO_CART", response.data)
                console.log(response.data)
            } catch (error) {
            console.error(error);
            }
        },

    },
    mutations: {
        SET_PRODUK(state, produk) {
            state.dataProduk = produk;
        },
        SET_SINGLE_PRODUK(state, produk) {
            state.singleProduk = produk;
        },
        ADD_TO_CART(state, cart) {
            state.cart = cart
        },
        
    }
}

export default produk;