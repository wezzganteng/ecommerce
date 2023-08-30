<template>
  
  <nav class=" dark:bg-gray-900 fixed w-full z-10" style="background-color: #113448;">
    <div class="max-w-screen-xl flex flex-wrap ml-10 justify-between mx-10 p-1">
    <a href="https://flowbite.com/" class="flex items-center">
        <span class="self-center text-3xl font-bold  whitespace-nowrap text-white">SEGAR . </span>
    </a>
    <div class="flex md:order-3">
      <div class="my-4 flex items-center space-x-6 space-y-2 lg:my-0 lg:ml-auto lg:space-x-8 lg:space-y-0">
          <div v-if="isAuthenticated">
               <router-link to="/cart" class="relative inline-flex items-center px-5 border-white">
                <svg class="h-8 w-8 text-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="9" cy="19" r="2" />  <circle cx="17" cy="19" r="2" />  <path d="M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2" /></svg>
  <Cart/> 
                  </router-link> 
              <dropdown text="Bottom">
      <template #trigger> 
                    <a href="#" class=" inline-flex text-white items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-green-300 hover:border-blue-300 dark:hover:text-gray-300 group text-1xl font-semibold">
                   <svg class="h-8 w-8 text-white ml-3"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
</svg>
 {{ user.name }} 
                  
                  </a>
      </template>
      <list-group>
          <router-link to="profile">
        <list-group-item>
          <template #prefix>
            <svg class="h-8 w-8 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />  <circle cx="12" cy="7" r="4" /></svg>
  
          </template>
          Profile
        </list-group-item>
      </router-link>
        <list-group-item>
          <template #prefix>
            <svg @click="logout" class="h-8 w-8 text-black"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />  <path d="M7 12h14l-3 -3m0 6l3 -3" /></svg>
          </template>
          Logout
        </list-group-item>
      </list-group>
    </dropdown>
              
              </div>
              <div v-else>
              <router-link to="/login" class="rounded-full text-emerald-500 mr-4 border-2 border-emerald-500 px-6 py-1 text-emerald-50 transition-colors hover:bg-emerald-500 hover:text-white">Login</router-link>
              <a href="/Register" title="" class="rounded-full text-emerald-500 border-2 border-emerald-500 px-6 py-1 text-emerald-50 transition-colors hover:bg-emerald-500 hover:text-white">Register</a>
            </div>
  
        </div>
    </div>
    <div class=" justify-between hidden w-full md:flex md:w-10 md:order-1 " id="navbar-sticky">
      <ul class="flex w-full flex-col items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0">
          <li class="lg:mr-10"><a class="inline-flex text-white text-1xl font-semibold items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-white hover:border-emerald-300 dark:hover:text-emerald-300 group "  href="/">Home</a></li>
          <li class="lg:mr-10"><a class="inline-flex text-white text-1xl font-semibold items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-white hover:border-emerald-300 dark:hover:text-emerald-300 group" href="/produk">product</a></li>
          <li class="lg:mr-10"><a class="inline-flex text-white text-1xl font-semibold items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-white hover:border-emerald-300 dark:hover:text-emerald-300 group" href="/contact">Contact</a></li>
          <li class="lg:mr-10"><a class="inline-flex text-white text-1xl font-semibold items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-white hover:border-emerald-300 dark:hover:text-emerald-300 group" href="/Brand">Brand</a></li>
          <li class="lg:mr-10"><a class="inline-flex text-white text-1xl font-semibold items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-white hover:border-emerald-300 dark:hover:text-emerald-300 group" href="/Kategori">Kategori</a></li>
        </ul>
      </div>
    </div>
  
  </nav> 
  
  
  
  
  
  </template>
  
  
  <script>
  import { mapActions, mapGetters } from 'vuex';
  import Cart from './Cart.vue';  
  export default {
    name: 'Navbar',
    props:['name'],

      computed: {
          ...mapGetters ('auth', ['isAuthenticated']),
          ...mapGetters('auth', ['getUser']),
          user (){
              return this.getUser;
          },
      },
      methods: {
          ...mapActions('auth', ['logout']),
          ...mapActions('auth', ['getUserInfo']),
      },
      async mounted() {
  
      const user = await this.getUserInfo();
      if (user) {
      this.$store.commit("auth/SET_USER", user);
              }   
          }
          
      };
  
  </script>
  
  <script setup>
  import { Dropdown, ListGroup, ListGroupItem, Navbar } from 'flowbite-vue'
  </script>
  
  