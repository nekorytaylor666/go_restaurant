<template>
  <div class="bg-white flex flex-col pt-20 min-h-screen w-full">
    <h1 class="font-sans text-2xl font-bold text-green">My bag</h1>
    <ul class="space-y-4 mt-10">
      <li v-for="(cartItem, index) in cart" :key="index" class="w-full flex items-center px-8">
        <div class="flex items-center justify-start">
          <img class="w-16 h-16 rounded-full mr-4" src="../assets/images/sandwich.jpg" alt="sandwich" />
          <div class="flex flex-col items-start">
            <span class="text-green font-bold text-xl">{{ cartItem.title }}</span>
            <span class="text-green text-sm font-bold"> {{ cartItem.price }} <span class="text-xs">KZT</span> </span>
          </div>
        </div>
      </li>
    </ul>
    <div class="flex justify-end flex-col flex-1 p-8">
      <div class="flex w-full items-end justify-between">
        <span class="text-green text-xl font-bold font-display">Итого:</span>
        <span class="text-green text-3xl font-bold font-display"> {{ total }} <span class="text-sm">KZT</span> </span>
      </div>
      <button
        @click.prevent="sendOrder"
        class="mt-4 font-sans bg-green text-yellow font-bold text-lg text-center py-2 px-6 rounded-lg"
      >
        Отправить заказ
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState([
      // map this.count to store.state.count
      "cart",
    ]),
    total() {
      return this.cart.reduce((acc, item) => acc + item.price, 0);
    },
  },
  methods: {
    sendOrder() {
      this.$swal("Отправлено официанту!");
    },
  },
};
</script>

<style lang="scss" scoped></style>
