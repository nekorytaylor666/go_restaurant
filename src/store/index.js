import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
  },
  mutations: {
    addItemCart(state, payload) {
      const cart = state.cart;
      cart.push(payload.item);
      state.cart = cart;
    },
  },
  actions: {
    addItemCart({ commit }, item) {
      commit("addItemCart", {
        item,
      });
    },
  },
  modules: {},
});
