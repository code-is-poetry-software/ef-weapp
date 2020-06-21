import store from "./";
import { VuexModule, Module, Action } from "vuex-class-modules";
import * as api from "../../common/vmeitime-http";
@Module({ generateMutationSetters: true })
class AuthStore extends VuexModule {
  showLogin = false;
  showGetMobile = false;
  token = uni.getStorageSync("token") || "";
  session_key = "";
  user = {
    name: "",
    avatarUrl: "",
    openid: "",
    mobile: ""
  };

  @Action
  async getPhoneNumber(data) {
    const { iv, encryptedData } = data.detail;
    const {
      session_key,
      user: { openid }
    } = this;
    const res = await api.updateMobile({ iv, encryptedData, session_key, openid });
    uni.hideLoading();
    const { user, token } = res.data;
    this.user = user;
    this.token = token;
    this.showGetMobile = false;
    return res.data;
  }
}

export const authStore = new AuthStore({ store, name: "auth" });
