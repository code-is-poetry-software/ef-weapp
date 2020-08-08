<template>
  <view :class="['button-avatar2', type]" @click="$emit('click')">
    <img class="button-avatar" src="/static/image/button-avatar2.png" mode="widthFix" />

    <view class="avatar-box">
      <img class="avatar-bg" :src="item.avatarUrl" mode="widthFix" />
      <img class="avatar" :src="item.avatarUrl" mode="widthFix" />
    </view>
    <view class="text">{{ name }}</view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import nzhcn from "nzh/cn";

@Component
export default class Template extends Vue {
  @Prop({ default: {} }) item: any;
  @Prop({ default: "" }) type: string;

  get name() {
    if (this.item.equipmentNum) {
      return nzhcn.encodeS(this.item.equipmentNum) + "号无人机";
    }
    return this.item.name;
  }
}
</script>

<style lang="stylus" scoped>
.button-avatar2
  position relative
  display inline-block
  text-align center
  .button-avatar
    width 450upx
  .avatar-box
    position absolute
    width 332upx
    height 216upx
    top 1upx
    left 48upx
    display flex
    justify-content center
    clip-path polygon(35% 0, 100% 0%, 65% 100%, 0 100%)
  .avatar
    width 240upx
    z-index 1
  .avatar-bg
    position absolute
    filter blur(10rpx)
  .text
    position absolute
    left 60upx
    top 245upx
    color white
    z-index 1
    font-style italic
    font-weight bold
    font-size 30upx
.small
  .button-avatar
    width 200upx
  height 136upx
  .avatar-box
    position absolute
    width 155upx
    height 98upx
    top 0
    left 20upx
    display flex
    justify-content center
    clip-path polygon(35% 0, 100% 0%, 65% 100%, 0 100%)
  .avatar
    width 120upx
  .avatar-bg
    position absolute
    filter blur(10rpx)
  .text
    position absolute
    left 25upx
    top 110upx
    color white
    z-index 1
    font-style italic
    font-weight bold
    font-size 15upx
</style>
