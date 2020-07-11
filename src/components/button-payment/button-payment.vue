<template>
  <view class="button-payment" @click="$emit('click')">
    <img class="img" src="/static/image/button-payment.png" mode="widthFix" />
    <view class="info">
      <view>项目: {{ item.name }} </view>
      <view>时间: {{ item.date }} </view>
    </view>
    <view class="status">
      <view>费用：</view>
      <view>{{ item.price }}</view>
    </view>
  </view>
</template>
<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";

@Component
export default class Template extends Vue {
  @Prop({
    default: {
      id: 0,
      name: "竞速无人机",
      date: "2020年6月8日",
      score: "5:0",
      sessions: "6人场",
      price: 189.0
    }
  })
  item;
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
