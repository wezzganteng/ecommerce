<template>
  <div class="pt-20 bg-amber-50">
    <div class="container mx-auto px-4">
      <div class="message text-center">
        <h1 class="text-3xl font-bold pt-10">Thank you for your order</h1>
        
       <br><br>

      </div>
      <div class="text-center grey lighten-4 border border-gray-200 pa-4 rounded fs-18 fw-700 lh-1">Order Summary
</div>
      <div class="mx-10 mt-10">
        
        <div class="grid grid-cols-2">
          <div>
            
            <dl
              class="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700"
            >

            
              <div class="flex flex-col pb-3">
                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                  Order Code : 
                </dt>
                <dd class="text-lg font-semibold">{{ getOrder.code }}</dd>
              </div>
              <div class="flex flex-col pb-3">
                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                  Name : 
                </dt>
                <dd class="text-lg font-semibold">{{ getOrder.user.name }}</dd>
              </div>
              <div class="flex flex-col pb-3">
                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                  Email : 
                </dt>
                <dd class="text-lg font-semibold">{{ getOrder.user.email }}</dd>
              </div>
              <div class="flex flex-col py-3">
                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                  Shipping Address : 
                </dt>
                <dd class="text-lg font-semibold">
                  {{ getOrder.shipping_address.address }}, {{  getOrder.shipping_address.city }}, {{  getOrder.shipping_address.state }}, {{  getOrder.shipping_address.country }}, {{  getOrder.shipping_address.postal_code }}
                </dd>
              </div>
              <div class="flex flex-col pt-3">
                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                  Phone :
                </dt>
                <dd class="text-lg font-semibold">
                  {{  getOrder.shipping_address.phone }}
                </dd>
              </div>
            </dl>
          </div>
          <div>
            <dl
              class="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700"
            >
              <div class="flex flex-col pb-3">
                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                  Payment Method : 
                </dt>
                <dd class="text-lg font-semibold"> {{ getOrder.orders[0].payment_type }}</dd>
              </div>
              <div class="flex flex-col pb-3">
                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                  Delivery type : 
                </dt>
                <dd class="text-lg font-semibold">{{ getOrder.orders[0].delivery_type }}</dd>
              </div>
              <div class="flex flex-col py-3">
                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                  Billing Address : 
                </dt>
                <dd class="text-lg font-semibold">
                  {{ getOrder.shipping_address.address }}, {{  getOrder.shipping_address.city }}, {{  getOrder.shipping_address.state }}, {{  getOrder.shipping_address.country }}, {{  getOrder.shipping_address.postal_code }}
                </dd>
              </div>
              <div class="flex flex-col pt-3">
                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                  Sub Total:
                </dt>
                <dd class="text-lg font-semibold">
                  {{  getOrder.orders[0].grand_total }}
                  
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      {{ orderData }}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
export default {
  props: ['orderCode'],
  computed: {
    ...mapGetters('order', ['getOrder']),
  },
  created() {
    this.$store.dispatch('order/fetchOrderData', this.orderCode);
  },
};
</script>