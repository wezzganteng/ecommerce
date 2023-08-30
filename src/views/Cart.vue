<template>
  <br><br><br>
<section class=" bg-gray-100 py-12 sm:py-16 lg:py-20 ">
  <div   class="mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-center">
      <h1 class="text-2xl font-semibold text-gray-900">Your Cart</h1>
    </div>
    
    <div class="mx-auto mt-8 max-w-2xl md:mt-12">
      <div class="bg-white shadow">
        <div class="px-4 py-6 sm:px-8 sm:py-10">
          <div class="flow-root">
            <ul class="-my-8">
              <li v-for="cart in getCart" :key="cart.cart_id" class="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                <div class="shrink-0">
                  <img class="h-24 w-24 max-w-full rounded-lg object-cover" src="https://images.unsplash.com/photo-1649261191624-ca9f79ca3fc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>

                <div class="relative flex flex-1 flex-col justify-between">
                  <div class="sm:col-gap-5 sm:grid sm:grid-cols-2">
                    <div class="pr-8 sm:pr-5">
                      <p class="text-base font-semibold text-gray-900">{{ cart.name }}</p>
                      <p class="mx-0 mt-1 mb-0 text-sm text-gray-400">{{ (cart.regular_price).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }) }}</p>
                    </div>

                    <div class="ml-10 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end pl-1">
                      <p class="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right pt-3 mr-3">{{ (cart.regular_price * cart.qty).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}}</p>

                      <div class="class= grid md:grid-cols-3 mb-3 mt-3">
                            <div class="flex items-center border-gray-100">
                                <!-- Counter Item -->
                                <span @click="changeQty({cartId: cart.cart_id, typeQty: 'minus'})"
                                    class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-black hover:text-yellow-50">
                                    - </span>
                                <span class="mr-2 ml-2">
                                    {{ cart.qty }}
                                </span>
                                <span @click="changeQty({cartId: cart.cart_id, typeQty: 'plus'})"
                                    class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-black hover:text-yellow-50">
                                    + </span>
                            </div>
                            </div>
                    </div>
                  </div>

                  <div class="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                    <button @click="removeItem(cart.cart_id)" type="button" class="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-emerald-900">
                      <svg class="h-8 w-8 text-red-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
</svg>

                    </button>
                  </div>
                </div>
              </li>

            </ul>
          </div>

          <div class="mt-6 border-t py-2">
            

          </div>
          <div class="mt-6 flex items-center justify-between">
            <p class="text-sm font-medium text-gray-900">Total</p>
            <p class="text-2xl font-semibold text-gray-900"><span class="text-xs font-normal text-gray-400"></span> {{ (totalHarga).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }) }}</p>
          </div>

          <router-link to="/checkOut">
          <div class="mt-6 text-center">
              <button type="button" class="group inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-emerald-800">
              Checkout
              <svg xmlns="http://www.w3.org/2000/svg" class="group-hover:ml-8 ml-4 h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </router-link>
        </div>
      </div>
    </div>
  </div>
</section>


</template>

<script>
import { mapActions, mapGetters } from 'vuex';

    
export default {
  data () {
    return {
        
        };
    },
  computed: {
    ...mapGetters('cart', ['getCart']),
    ...mapActions('cart', ['changeQuantity']),
    totalHarga(){
      this.total = this.getCart.reduce((acc, produk) => {
        return acc + parseFloat(produk.regular_price * produk.qty);
      },0);
      return this.total;
    },
    
  },
  methods: {
    ...mapActions('cart', ['fetchCart']),
    ...mapActions('produk', ['fetchProduk']),
    

        changeQty(cartId,typeQty){
  this.$store.dispatch('cart/changeQuantity', cartId,typeQty)
  },      
        removeItem(cartId){
  this.$store.dispatch('cart/removeFromCart', cartId)
  },     
},

  beforeMount(){
    this.fetchProduk();
  },
    mounted() {
      this.fetchCart();
    }
}
</script>