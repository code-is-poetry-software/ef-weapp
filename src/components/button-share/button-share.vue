<template>
  <view class="button-share" @click="onClick">
    <img class="img" :src="active ? '/static/image/button-share-active.png' : '/static/image/button-share.png'" mode="widthFix" />
    <view class="text">{{ text }}</view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";

@Component
export default class Template extends Vue {
  @Prop({ default: "" }) text: string;
  @Prop({ default: false }) active: boolean;

  onClick() {
    this.$emit("update:active", !this.active);
    this.$emit("click");
  }
}
</script>

<style lang="stylus" scoped>
.button-share
  position relative
  display flex
  align-items center
  justify-content center
  .img
    width 320upx
  .text
    position absolute
    left 40upx
    top 20upx
    font-size 24upx
    font-family Alibaba PuHuiTi
    font-weight bold
    letter-spacing 2px
    color white
    z-index 1
    font-style italic
</style>
