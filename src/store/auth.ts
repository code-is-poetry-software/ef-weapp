import store from "./";
import { VuexModule, Module, Action } from "vuex-class-modules";
import * as api from "../../common/vmeitime-http";
import { User } from "../type";
@Module({ generateMutationSetters: true })
class AuthStore extends VuexModule {
  showLogin = false;
  showGetMobile = false;
  token = uni.getStorageSync("token") || "";
  session_key = "";
  user: Partial<User> = {
    id: "0",
    name: "",
    avatarUrl: "",
    openid: "",
    mobile: "",
    balance: 0,
    points: 0,
    role: "customer"
  };

  async devLogin() {
    if (process.env.NODE_ENV === "development") {
      await this.wechatLogin();
    }
  }

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

  @Action
  async fetchUser() {
    const res = await api.getAuthUser();
    this.user = res.data;
    return this.user;
  }

  wechatGetUserInfo() {
    return new Promise((resolve, reject) => {
      const provider = "weixin";
      uni.showLoading();
      uni.getUserInfo({
        provider,
        lang: "zh_CN",
        success: async userData => {
          // console.log(userData);
          try {
            const res = await api.wechatSignup({
              session_key: this.session_key,
              encryptedData: userData.encryptedData,
              iv: userData.iv
            });
            this.storeUser(res.data);
            resolve(res);
          } catch (err) {
            uni.showToast({
              title: err.message,
              icon: "none"
            });
            reject(err);
          }
        },
        fail(err) {
          reject(err);
        },
        complete() {
          uni.hideLoading();
        }
      });
    });
  }

  wechatLogin() {
    return new Promise(async (resolve, reject) => {
      const provider = "weixin";
      uni.showLoading();
      uni.login({
        provider,
        success: async loginRes => {
          try {
            const res = await api.wechatLogin({
              code: loginRes.code
            });
            if (res.data) {
              this.storeUser(res.data);
              return resolve(res);
            } else {
              reject(new Error("数据错误"));
            }
          } catch (error) {
            reject(error);
          }
        },
        fail(err) {
          reject(err);
        },
        complete() {
          uni.hideLoading();
        }
      });
    });
  }

  storeUser(data) {
    if (!data) return;
    const { user, token, session_key } = data;
    this.user = user;
    this.token = token;
    this.session_key = session_key;
  }
}

export const authStore = new AuthStore({ store, name: "auth" });
