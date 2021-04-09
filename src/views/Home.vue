<template>
  <div class="pt-20 p-6">
    <menu-list-item v-for="(menuItem,index) in menu" :key="index" :item="menuItem"/>
  </div>
</template>
<script>
import MenuListItem from "../components/MenuListItem.vue";
import gql from 'graphql-tag';

const CAFE_BY_ID = gql`query ($cafe_id: String!) {
    getMenu(cafe_id: $cafe_id) {
      food_name
      food_price
      food_id
      food_url
    }
}`;

export default {
  components: { MenuListItem },
  data() {
    return {
      menu: []
    }
  },
  apollo: {
    menu: {
      query: CAFE_BY_ID,
      variables() {
        return { cafe_id: "ef47b0d2-de99-4db1-b314-d94439b30fe3" }
      },
      update(data) {
        console.log(data);
        return data.getMenu
      }    
    }
   
  }
};
</script>
<style lang=""></style>
