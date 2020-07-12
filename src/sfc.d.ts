import Vue from "vue";
import { config } from "../config";

declare module "*.vue" {
  export default Vue;
}

declare module "vue/types/vue" {
  export interface Vue {
    navigateTo: function;
    _: any;
    uni: UniApp.Uni;
    config: typeof config;
  }
}
