<template>
  <!-- source: https://github.com/mfg888/Responsive-Tailwind-CSS-Grid/blob/main/index.html -->
  <div class="bg-emerald-50">
<br><br><br>
<div class=" bg-emerald-50 text-center p-10">
    <h1 class="font-bold text-4xl mb-4 ">PRODUK</h1>

</div>

<!-- ✅ Grid Section - Starts Here 👇 -->
<section id="Projects"
    class=" w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">

    <!--   ✅ Product card 1 - Starts Here 👇 -->
    <div v-for="produk in getProduk.data" :key="produk.id" class=" group w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <router-link :to="'/SingleProduk/' + produk.slug" class="group" >
            <img src="https://images.unsplash.com/photo-1649261191624-ca9f79ca3fc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60 "
                    alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
            <div class="px-4 py-3 w-72">
                <span class="text-gray-400 mr-3 uppercase text-xs"> {{ produk.slug }}</span>
                <p class="text-lg font-bold text-black truncate block capitalize group-hover:text-emerald-600">{{ produk.name }}</p>
                <div class="flex items-center">
                    <p class="text-lg font-semibold text-black cursor-auto my-3"> {{ (produk.base_price).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }) }}</p>
                    <del>
                        <p class="text-sm text-gray-600 cursor-auto ml-2"></p>
                    </del>
                    <div class="ml-auto"></div>
                </div>
            </div>
        </router-link >
    </div>
    <!--   🛑 Product card 1 - Ends Here  -->

    
</section>

<!-- 🛑 Grid Section - Ends Here -->


<!-- credit -->
</div>


</template>

<script>
  
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
</script>

