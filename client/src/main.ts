import Vue from "vue";
import VueRouter from "vue-router";

import Error from "./components/Error.vue";
import App from "./App.vue";
import "./registerServiceWorker";

Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [{ path: "/404/:id", component: Error }],
});

new Vue({
  render: (h) => h(App),
}).$mount("#root");
