<template>
  <view class="get-phonenumber">
    <u-popup v-model="showGetMobile" mode="bottom" border-radius="40">
      <view class="content">
        <text class="tilte">是否授权微信获得手机号?</text>
        <view class="action-bar">
          <u-button @click="close">取消</u-button>
          <u-button class="u-m-l-20" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">确认</u-button>
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
    text-align center
    height 500upx
    padding 100upx 0 0 0
    .action-bar
      display flex
      justify-content center
      margin-top 100upx
</style>
