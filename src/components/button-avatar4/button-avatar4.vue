<template>
  <view class="button-avatar4" @click="$emit('click')">
    <img class="img" src="/static/image/button-avatar4.png" mode="widthFix" />
    <view class="avatar-box">
      <img class="avatar" :src="user.avatarUrl" mode="widthFix" />
    </view>
    <view class="info">
      <view class="text">ID: {{ user.name }}</view>
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
.button-avatar4
  position relative
  display flex
  align-items center
  justify-content center
  .img
    width 629upx
  .avatar-box
    position absolute
    width 132upx
    height 83upx
    top 5upx
    left 248upx
    background var(--primary)
    display flex
    justify-content center
    clip-path polygon(35% 0, 100% 0%, 65% 100%, 0 100%)
    .avatar
      width 132upx
  .info
    position absolute
    left 345upx
    top 40upx
    color white
    z-index 1
    font-style italic
    font-family Alibaba PuHuiTi
    font-weight bold
    .text
      font-size 28upx
      margin-left 15upx
    .text1
      font-size 22upx
</style>
