<template>
  <view class="button-payment" @click="$emit('click')">
    <img class="img" src="/static/image/button-payment.png" mode="widthFix" />
    <view class="info">
      <view>项目: {{ item.title.substr(0, 7) }} </view>
      <view>时间: </view>
    </view>
    <view class="status">
      <view>费用：</view>
      <view>{{ item.amount }}</view>
    </view>
  </view>
</template>
<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import { Payment } from "../../type";

@Component
export default class Template extends Vue {
  @Prop({ default: {} }) item: Payment;
}
</script>

<style lang="stylus" scoped>
.button-payment
  position relative
  display flex
  align-items center
  justify-content center
  text-align left
  .img
    width 607upx
  .info
    position absolute
    left 110upx
    top 24upx
    font-size 28upx
    font-family Alibaba PuHuiTi
    font-weight bold
    letter-spacing 2px
    color var(--text-primary)
  .status
    position absolute
    font-size 20upx
    right 173upx
    top 24upx
    font-size 28upx
    font-family Alibaba PuHuiTi
    font-weight bold
    letter-spacing 2px
    color var(--text-primary)
</style>
