import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import ProductPage from "@/views/ProductPage.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/product",
    component: ProductPage,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
