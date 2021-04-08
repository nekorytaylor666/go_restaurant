import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import ProductPage from "@/views/ProductPage.vue";
import CartPage from "@/views/CartPage.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/product/:id",
    component: ProductPage,
  },
  {
    path: "/cart/",
    component: CartPage,
  },
  {
    path: "/",
    component: Home,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
