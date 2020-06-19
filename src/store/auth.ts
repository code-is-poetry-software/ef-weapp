import store from "./";
import { VuexModule, Module } from "vuex-class-modules";

@Module({ generateMutationSetters: true })
class AuthStore extends VuexModule {
  showLogin = false;
  showGePhone = false;
  token = uni.getStorageSync("token") || "";
  session_key = "";
  user = {
    name: "",
    avatarUrl: "",
    openid: "",
  };
}

export const authStore = new AuthStore({ store, name: "auth" });
