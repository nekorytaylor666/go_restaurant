<template>
  <div class="bg-white flex flex-col pt-20 min-h-screen w-full">
    <h1 class="font-sans text-2xl font-bold text-green">My bag</h1>
    <ul class="space-y-4 mt-10">
      <li v-for="(cartItem, index) in cart" :key="index" class="w-full flex items-center px-8">
        <div class="flex items-center justify-start">
          <img class="w-16 h-16 rounded-full mr-4 object-cover" :src="cartItem.photoUrl" alt="sandwich" />
          <div class="flex flex-col items-start">
            <span class="text-green font-bold text-xl">{{ cartItem.name }}</span>
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
import gql from 'graphql-tag';

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
    async sendOrder() {
      await this.$apollo.mutate({
        mutation: gql`mutation ($food: [String!]!, $cafe_id: String!) {
          addOrder(food: $food, cafe_id: $cafe_id) {
            status
          }
        }`,
        variables: {
          food: this.cart.map(item => item.id),
          cafe_id: "ef47b0d2-de99-4db1-b314-d94439b30fe3"
        },
      })
      this.$swal("Отправлено официанту!");

    },
  },
};
</script>

<style lang="scss" scoped></style>
