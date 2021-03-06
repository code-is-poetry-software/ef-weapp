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
// @ts-ignore
import buttonBg from "../../static/image/button-mode.png";
// @ts-ignore
import buttonBgActive from "../../static/image/button-mode-active.png";
import { storeStore } from "@/store/store";

@Component
export default class Template extends Vue {
  @Prop({ default: "" }) text: string;
  @Prop({ default: 0 }) amount: string;
  @Prop({ default: 100 }) max: number;

  show = false;

  clearAmountOnNextChange = false;

  get curStore() {
    return storeStore.curStore;
  }

  onClick() {
    const { promptMessage } = this.curStore.projects.find(i => i.name == this.text) || {};
    if (promptMessage && !this.show) {
      return uni.showModal({
        title: "提醒",
        content: promptMessage,
        showCancel: false,
        success: () => {
          this.handleKeyboard();
        }
      });
    }
    this.handleKeyboard();
  }
  handleKeyboard() {
    this.show = true;
    if (this.amount) {
      this.clearAmountOnNextChange = true;
    }
    this.$emit("click");
  }

  onChange(e) {
    const amount = this.amount == "0" || this.clearAmountOnNextChange ? e : String(this.amount) + e;
    if (Number(amount) > this.max) return;
    this.clearAmountOnNextChange = false;
    this.$emit("update:amount", amount);
  }

  backspace() {
    const amountWas = this.amount.toString();
    const amount = amountWas.length ? amountWas.substr(0, amountWas.length - 1) : amountWas;
    this.$emit("update:amount", +amount || 0);
  }
  get image() {
    return Number(this.amount) > 0 ? buttonBgActive : buttonBg;
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
    left 50upx
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
