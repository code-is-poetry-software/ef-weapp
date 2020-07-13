<template>
  <view class="match page">
    <with-bg />
    <view style="text-align: center">
      <button-avatar2 />
    </view>
    <view style="margin-top: 300upx">
      <button-Arrow text="一号无人机" />
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { event } from "../../utils/event";
import { authStore } from "../../store/auth";

@Component
export default class UserIndex extends Vue {
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
.match
  position relative
  padding 350upx 0
</style>
