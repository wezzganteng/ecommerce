import axios from "axios";

const kategori = {
    namespaced: true,
    state: {
        dataKategori: [],
    },
    getters: {
        getKategori: (state) => state.dataKategori,
    },
    actions: {  
        async fetchKategori({ commit }) {
            try{
                const data = await axios.get(
                    "https://ecommerce.olipiskandar.com/api/v1/all-categories"
                );
                commit("SET_KATEGORI", data.data);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
    },
    mutations: {
        SET_KATEGORI(state, kategori) {
            state.dataKategori = kategori;
        }
    }
}

export default kategori;