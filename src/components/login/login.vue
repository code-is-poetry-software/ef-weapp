<template>
  <view class="login">
    <u-popup v-model="showLogin" mode="bottom" border-radius="40">
      <view class="content">
        <view class="action-bar">
          <button-normal class="button" @click="close">
            <view style="color: #0090d9;">暂不登录</view>
          </button-normal>
          <button-normal class="u-m-l-20">
            <button class="button-empty" open-type="getUserInfo" @getuserinfo="wechatGetUserInfo" withcredentials="true" style="color: #0090d9;">微信登录</button>
          </button-normal>
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
    background #d3f1fe
    text-align center
    height 500upx
    padding 100upx 0 0 0
    .action-bar
      display flex
      justify-content center
      margin-top 100upx
</style>
