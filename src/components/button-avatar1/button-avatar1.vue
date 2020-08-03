<template>
  <view class="button-avatar1" @click="$emit('click')">
    <img v-if="user.mobile" class="img" src="/static/image/button-avatar1.png" mode="widthFix" />
    <img v-else class="img" src="/static/image/button-avatar1_1.png" mode="widthFix" />
    <view class="avatar-box">
      <img class="avatar-bg" :src="user.avatarUrl" mode="widthFix" style="height: 210upx;"/>
      <img class="avatar" :src="user.avatarUrl" mode="widthFix" style="height:150upx;" />
    </view>
    <view class="text2" @click="checkMobile">获取手机号</view>
    <view class="info">
      <view class="text">ID: {{ user.name }}</view>
      <view class="text1">手机号: {{ user.mobile || "" }}</view>
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import { authStore } from "../../store/auth";
import { User } from "../../type";
import { utils } from "../../utils";

@Component
export default class Template extends Vue {
  @Prop({ default: {} }) user: User;

  async checkMobile() {
    await utils.hooks.checkMobile();
  }
}
</script>

<style lang="stylus" scoped>
.button-avatar1
  position relative
  display flex
  align-items center
  justify-content center
  .img
    width 556upx
		height 142upx
  .avatar-box
    position absolute
    width 210upx
    height 132upx
    top 0
    left 15upx
    display flex
    justify-content center
    clip-path polygon(35% 0, 100% 0%, 65% 100%, 0 100%)
    .avatar
      width 150upx
			
    .avatar-bg
      position absolute
      width 210upx
      filter blur(10rpx)
  .info
    position absolute
    left 190upx
    top 45upx
    color white
    text-align left
    z-index 1
    font-style italic
    font-family Alibaba PuHuiTi
    font-weight bold
    .text
      font-size 28upx
      margin-left 15upx
    .text1
      font-size 22upx
.text2
  position absolute
  top 113upx
  left 410upx
  font-size 23upx
  color #FFFFFF
</style>
