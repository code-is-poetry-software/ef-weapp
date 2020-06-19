import Vue from "vue";
import App from "./App.vue";
import store from "./store";

import uView from "uview-ui";
Vue.use(uView);

Vue.config.productionTip = false;

new App({ store }).$mount();
