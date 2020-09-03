<template>
  <view class="button-price" @click="$emit('click')">
    <img class="img" src="/static/image/button-price.png" mode="widthFix" />
    <view class="text">
      <span>共计: </span>
      <span class="price">{{ text }}</span>
      <span class="price price-origin" v-if="textOrigin">{{ textOrigin }}</span>
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";

@Component
export default class Template extends Vue {
  @Prop({ default: "" }) text: string;
  @Prop({ default: "" }) textOrigin: string;
}
</script>

<style lang="stylus" scoped>
.button-price
  position relative
  display flex
  align-items center
  justify-content center
  .img
    width 270upx
    height 62upx
  .text
    position absolute
    font-size 29upx
    font-family Alibaba PuHuiTi
    font-weight bold
    letter-spacing 2upx
    color #0090D9
    z-index 1
    font-style italic
    .price
      font-family Gotham-Bold
      color #666666
    .price.price-origin
      text-decoration line-through
      color #aaa
      font-size 80%
</style>
