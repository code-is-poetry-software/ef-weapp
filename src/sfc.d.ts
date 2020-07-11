import Vue from "vue";

declare module "*.vue" {
  export default Vue;
}

declare module "vue/types/vue" {
  export interface Vue {
    navigateTo: function;
    _: any;
  }
}
