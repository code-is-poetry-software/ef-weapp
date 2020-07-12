<template>
  <view class="user-history page">
    <with-bg />
    <view style="padding:140upx 62upx 113upx 58upx" class="flex justify-between align-center">
      <button-title1 text="潮玩记录" />
      <icon-details />
    </view>
    <view>
      <button-avatar5 :user="user" />
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { authStore } from "../../store/auth";

@Component
export default class Template extends Vue {
  onLoad() {
    authStore.devLogin();
  }
  get user() {
    return authStore.user;
  }
}
</script>

<style lang="stylus" scoped>
.user-history
  position relative
  .tabs
    display flex
    justify-content center
    .tab
      display flex
      align-items center
      padding 40upx
      width 200upx
      height 56upx
      background grey
      margin 0 20upx
      &.active
        background #4d8ad6
  .list
    text-align center
</style>
