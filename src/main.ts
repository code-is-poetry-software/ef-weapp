import Vue from "vue";
import App from "./App.vue";
import store from "./store";

import uView from "uview-ui";
import _moment from "moment";
import { utils } from "./utils/index";
import { _ } from "./utils/lodash";
Vue.use(uView);

Vue.config.productionTip = false;

//@ts-ignore
global.store = store;

Vue.prototype.moment = _moment;
Vue.prototype.log = console.log;
Vue.prototype.uni = uni;
Vue.prototype._ = _;

Vue.prototype.navigateTo = async ({ url, checkAuth, checkMobile }: { url: string; checkAuth?: boolean; checkMobile?: boolean }) => {
  if (checkAuth) {
    await utils.hooks.checkLogin();
  }
  if (checkMobile) {
    await utils.hooks.checkMobile();
  }
  uni.navigateTo({ url });
};

const app = new Vue({
  ...App,
  store
});

app.$mount(); //为了兼容小程序及app端必须这样写才有效果
