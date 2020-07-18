import Vue from "vue";
import { config } from "../config";
import { _ } from "./utils/lodash";
import moment from "moment";

declare module "*.vue" {
  export default Vue;
}

declare module "vue/types/vue" {
  export interface Vue {
    navigateTo: function;
    _: typeof _;
    uni: UniApp.Uni;
    config: typeof config;
    moment: typeof moment;
  }
}
