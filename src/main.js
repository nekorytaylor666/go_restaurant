import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/css/tailwind.css";
import VueSweetalert2 from "vue-sweetalert2";
import VueApollo from 'vue-apollo'

Vue.use(VueApollo)
// If you don't need the styles, do not connect
import "sweetalert2/dist/sweetalert2.min.css";

import ApolloClient from 'apollo-boost'

const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  uri: 'http://285dbf2110ee.ngrok.io/graphql',
  fetchOptions: {
    headers: { 
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    },
    fetchOptions:{
      mode:'cors'
    }
  },
})

const options = {
  confirmButtonColor: "#30452c",
  cancelButtonColor: "#ff7674",
};
Vue.use(VueSweetalert2, options);
Vue.config.productionTip = false;
const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})
new Vue({
  router,
  store,
  apolloProvider,
  render: (h) => h(App),
}).$mount("#app");
