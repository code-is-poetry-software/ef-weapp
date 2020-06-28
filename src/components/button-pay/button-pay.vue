<template>
  <view class="button-pay" @click="$emit('click')">
    <img class="img" src="/static/image/button-pay.png" mode="widthFix" />
    <view class="text"> {{ text }} </view>
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
.button-pay
  position relative
  display flex
  align-items center
  justify-content center
  .img
    width 400upx
  .text
    position absolute
    font-size 21px
    font-family Alibaba PuHuiTi
    font-weight bold
    letter-spacing 2px
    color white
    z-index 1
</style>
