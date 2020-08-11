<template>
  <view class="get-phonenumber">
    <u-popup v-model="showGetMobile" mode="bottom" border-radius="40">
      <view class="content">
        <text class="tilte">是否授权微信获得手机号?</text>
        <view class="action-bar">
          <button-normal class="button" @click="close">
            <view style="color: #0090d9;">取消</view>
          </button-normal>
          <button-normal class="u-m-l-20">
            <button class="button-empty" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber" style="color: #0090d9;">确认</button>
          </button-normal>
        </view>
      </view>
    </u-popup>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { authStore } from "../../store/auth";
import { event } from "../../utils/event";
import { utils } from "../../utils";

@Component
export default class Template extends Vue {
  get showGetMobile() {
    return authStore.showGetMobile;
  }
  set showGetMobile(val) {
    authStore.showGetMobile = val;
  }

  close() {
    authStore.showGetMobile = false;
    utils.event.removeAllListeners("mobile");
  }

  async getPhoneNumber(res) {
    if (!res.detail.encryptedData) return;
    try {
      await authStore.getPhoneNumber(res);
      event.emit("mobile");
    } catch (error) {}
  }
}
</script>

<style lang="stylus" scoped>
.get-phonenumber
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
