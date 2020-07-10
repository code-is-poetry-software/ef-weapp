<template>
  <view class="login">
    <u-popup v-model="showLogin" mode="bottom" border-radius="40">
      <view class="content">
        <view class="action-bar">
          <u-button @click="close">暂不登录</u-button>
          <u-button class="u-m-l-20" open-type="getUserInfo" @getuserinfo="wechatGetUserInfo" withcredentials="true">微信登录</u-button>
        </view>
      </view>
    </u-popup>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { authStore } from "../../store/auth";
import { utils } from "../../utils";

@Component
export default class Template extends Vue {
  get showLogin() {
    return authStore.showLogin;
  }
  set showLogin(val) {
    authStore.showLogin = val;
  }

  close() {
    authStore.showLogin = false;
    utils.event.removeAllListeners("login");
  }

  async wechatGetUserInfo(res) {
    if (!res.detail.encryptedData) return;
    try {
      await authStore.wechatGetUserInfo();
      utils.event.emit("login");
      this.close();
    } catch (error) {
      console.log(error);
      utils.helper.errorHandler(error);
    }
  }
}
</script>

<style lang="stylus" scoped>
.login
  .content
    text-align center
    height 500upx
    padding 100upx 0 0 0
    .action-bar
      display flex
      justify-content center
      margin-top 100upx
</style>
