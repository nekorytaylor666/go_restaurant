<template>
  <div class="mb-8">
    <router-link :to="`/product/${item.food_id}`">
      <img class="h-52 rounded-lg w-full object-cover" :src="item.food_url" alt="soup" />
    </router-link>
    <div class="mt-2 flex justify-between items-center">
      <div class="flex flex-col items-start">
        <h3 class="font-display text-2xl font-bold text-yellow text-left">{{item.food_name}}</h3>
        <span class="font-display italic text-yellow">₸{{item.food_price}}</span>
      </div>
      <button class="focus:outline-none">
        <svg
          class="h-8 w-8 text-yellow"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          d
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
<script>



export default {
  name: "MenuListItem",
  props: {
    item: {
      type: Object,
      defaul() {
        return {
          name:'',
          price: 0,
          food_id: ''
        }
      }
    }
  }
};
</script>
<style lang=""></style>
