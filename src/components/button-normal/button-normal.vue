<template>
  <view class="button-normal" @click="$emit('click')">
    <img class="img" src="/static/image/button-normal.png" mode="widthFix" />
    <view class="text"><slot></slot> </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";

@Component
export default class Template extends Vue {
  @Prop({ default: "" }) text: string;
}
</script>

<style lang="stylus" scoped>
.button-normal
  position relative
  display flex
  align-items center
  justify-content center
  width 200upx
  .img
    position absolute
    width 200upx
    height 48upx
  .text
    font-size 33upx
    font-family Alibaba PuHuiTi
    letter-spacing 2px
    color white
    z-index 1
</style>
