<template>

<Navbar></Navbar>
<router-view />
<Footer></Footer>
</template>

<script>

import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

  
  export default {
  components : {
    Navbar,
    Footer
    },
  }
</script>

import { mapGetters, mapActions } from 'vuex'; 

export default{
    computed: {
        ...mapGetters('produk', ['getProduk']),
    },
    methods: {
        ...mapActions('produk', ['fetchProduk'])
    },
    created() {
        this.fetchProduk();
    },
}

import { mapState } from 'vuex';
export default {
    props:['slug'],
    computed: {
        ...mapState('produk', ['singleProduk']),
    },
    mounted(){
        return this.$store.dispatch('produk/fetchSingleProduk',this.slug)
    }

};