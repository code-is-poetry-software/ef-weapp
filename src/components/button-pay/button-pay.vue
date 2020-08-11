<template>
  <view class="button-pay" @click="onClick" :class="{ disabled }">
    <img class="img" src="/static/image/button-pay.png" mode="widthFix" />
    <view class="text"> {{ text }} </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";

@Component
export default class Template extends Vue {
  @Prop({ default: "" }) text: string;
  @Prop({ default: "" }) openType: string;
  @Prop({ default: false }) disabled: boolean;

  onClick() {
    if (this.disabled) return;
    this.$emit("click");
  }
}
</script>

<style lang="stylus" scoped>
.button-pay
  position relative
  display flex
  align-items center
  justify-content center
  background transparent
  &:after
    border none
  &.disabled
    opacity 0.5;
  .img
    width 400upx
		height 86upx
  .text
    position absolute
    font-size 50upx
    font-family Alibaba PuHuiTi
    font-weight bold
    letter-spacing 2upx
    color white
    z-index 1
</style>
