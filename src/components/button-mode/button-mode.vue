<template>
  <view class="button-mode" @click="onClick">
    <img class="img" :src="image" mode="widthFix" />
    <view class="text">{{ text }}</view>
    <view class="amount">{{ amount }}</view>
    <u-keyboard v-model="show" :dot-enabled="false" @backspace="backspace" @change="onChange"></u-keyboard>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";

@Component
export default class Template extends Vue {
  @Prop({ default: "" }) text: string;
  @Prop({ default: 0 }) amount: string;
  @Prop({ default: 100 }) max: number;

  show = false;

  onClick() {
    this.show = true;
    this.$emit("click");
  }

  onChange(e) {
    const amount = this.amount == "0" ? e : String(this.amount) + e;
    if (Number(amount) > this.max) return;
    this.$emit("update:amount", amount);
  }

  backspace() {
    const amount = this.amount.length ? this.amount.substr(0, this.amount.length - 1) : this.amount;
    this.$emit("update:amount", amount || 0);
  }
  get image() {
    return Number(this.amount) > 0 ? "/static/image/button-mode-active.png" : "/static/image/button-mode.png";
  }
}
</script>

<style lang="stylus" scoped>
.button-mode
  position relative
  display flex
  align-items center
  justify-content center
  .img
    width 430upx
    height 150upx
  .text
    position absolute
    left 80upx
    top 35upx
    font-size 33upx
    font-family Alibaba PuHuiTi
    font-weight bold
    letter-spacing 4upx
    color white
    z-index 1
    font-style italic
  .amount
    position absolute
    right 50upx
    bottom 4upx
    font-size 30upx
    font-family Alibaba PuHuiTi
    font-weight bold
</style>
