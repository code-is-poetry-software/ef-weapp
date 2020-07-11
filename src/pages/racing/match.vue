<template>
  <view>
    <!-- <img class="avatar" src="https://via.placeholder.com/132x83" /> -->
    <view class="content">
      <view class="user-info">
        <button-avatar2 />
        <button-Arrow @click="e => navigateTo({ url: '/pages/racing/playerDetails' })" />
      </view>
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
.user-index
  .content
    margin 200upx auto 0
    width 80%
    .user-info
      display flex
      position relative
</style>
