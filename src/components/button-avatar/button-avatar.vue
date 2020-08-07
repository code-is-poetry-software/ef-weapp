<template>
  <view class="button-avatar" @click="$emit('click')">
    <img class="img" src="/static/image/button-avatar.png" mode="widthFix" />
    <view class="avatar-box">
      <img class="avatar-bg" :src="user.avatarUrl" mode="widthFix" style="height: 210upx;" />
      <img class="avatar" :src="user.avatarUrl" mode="widthFix" style="height: 150upx;" />
    </view>
    <view class="info">
      <view class="text">您的好友</view>
      <view class="text1">{{ user.name }}</view>
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import { authStore } from "../../store/auth";
import { User } from "../../type";

@Component
export default class Template extends Vue {
  @Prop({ default: {} }) user: User;
}
</script>

<style lang="stylus" scoped>
.button-avatar
  position relative
  display inline-block
  align-items center
  justify-content center
  .img
    width 570upx
    height 67upx
  .avatar-box
    position absolute
    width 240upx
    height 150upx
    top 0
    left 15upx
    display flex
    justify-content center
    clip-path polygon(35% 0, 100% 0%, 65% 100%, 0 100%)
    .avatar
      width 150upx
      z-index 1
    .avatar-bg
      position absolute
      width 240upx
      filter blur(10rpx)
  .info
    position absolute
    left 205upx
    top 70upx
    color white
    z-index 1
    font-style italic
    font-family Alibaba PuHuiTi
    font-weight bold
    .text
      font-size 20upx
      margin-left 25upx
    .text1
      font-size 43upx
</style>
