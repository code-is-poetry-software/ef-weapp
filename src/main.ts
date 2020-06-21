import Vue from "vue";
import App from "./App.vue";
import store from "./store";

import uView from "uview-ui";
import _moment from "moment";
Vue.use(uView);

Vue.config.productionTip = false;

//@ts-ignore
global.store = store;

Vue.prototype.moment = _moment;
Vue.prototype.log = console.log;
const app = new Vue({
  ...App,
  store
});

app.$mount(); //为了兼容小程序及app端必须这样写才有效果
