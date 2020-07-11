<template>
  <view class="button-rank1" @click="$emit('click')">
    <img class="img" src="/static/image/button-rank2.png" mode="widthFix" />
    <view class="info">
      <view>项目: {{ item.name }} </view>
      <view>场次: {{ item.date }} 10:16 6人场</view>
    </view>
    <view class="status">已完成</view>
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
      sessions: "6人场"
    }
  })
  item;
}
</script>

<style lang="stylus" scoped>
.button-rank1
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
    top 42upx
    font-size 28upx
    font-family Alibaba PuHuiTi
    font-weight bold
    letter-spacing 2px
    color var(--text-primary)
  .status
    position absolute
    font-size 20upx
    color white
    right 89upx
    top 5upx
</style>
