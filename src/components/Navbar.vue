<template>
  
  <nav class="bg-emerald-200 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 ">
    <div class="max-w-screen-xl flex flex-wrap ml-10 justify-between mx-10 p-4">
    <a href="https://flowbite.com/" class="flex items-center">
        <img src="../assets/img/shopo.png" class="h-8 mr-3" alt="Flowbite Logo">
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Toto.</span>
    </a>
    <div class="flex md:order-3">
      <div class="my-4 flex items-center space-x-6 space-y-2 lg:my-0 lg:ml-auto lg:space-x-8 lg:space-y-0">
          <div v-if="isAuthenticated">
               <router-link to="/cart" class="relative inline-flex items-center px-5">
                <svg class="h-8 w-8 text-black"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
  </svg> 
  <Cart/> 
                  </router-link> 
              <dropdown text="Bottom">
      <template #trigger> 
                    <a href="#" class=" inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-blue-300 dark:hover:text-gray-300 group">
                    <svg class="h-8 w-8 text-black "  fill="none" viewBox="0 0 24 24" stroke="currentColor">  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg> {{ user.name }} 
                  
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
              <router-link to="/login" class="rounded-full mr-4 border-2 border-emerald-500 px-6 py-1 text-emerald-900 transition-colors hover:bg-emerald-500 hover:text-white">Login</router-link>
              <a href="/Register" title="" class="rounded-full border-2 border-emerald-500 px-6 py-1 text-emerald-900 transition-colors hover:bg-emerald-500 hover:text-white">Register</a>
            </div>
  
        </div>
    </div>
    <div class=" justify-between hidden w-full md:flex md:w-10 md:order-1 " id="navbar-sticky">
      <ul class="flex w-full flex-col items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0">
          <li class="lg:mr-10"><a class="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-500 hover:border-emerald-300 dark:hover:text-emerald-300 group " href="/">Home</a></li>
          <li class="lg:mr-10"><a class="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-500 hover:border-emerald-300 dark:hover:text-emerald-300 group" href="/produk">product</a></li>
          <li class="lg:mr-10"><a class="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-500 hover:border-emerald-300 dark:hover:text-emerald-300 group" href="/contact">Contact</a></li>
          <li class="lg:mr-10"><a class="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-500 hover:border-emerald-300 dark:hover:text-emerald-300 group" href="/Brand">Brand</a></li>
          <li class="lg:mr-10"><a class="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-500 hover:border-emerald-300 dark:hover:text-emerald-300 group" href="/Kategori">Kategori</a></li>
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
          ...mapGetters('auth', ['isAuthenticated']),
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
  
  