<template>
  <view class="button-rank1" @click="$emit('click')">
    <img class="img" src="/static/image/button-rank1.png" mode="widthFix" />
    <view class="text"> 项目: {{ item.name }} </view>
    <view class="text"> 时间:{{ item.date }} </view>
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
      score: "5:0"
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
  .img
    width 607upx
  .text
    position absolute
    font-size 21px
    font-family Alibaba PuHuiTi
    font-weight bold
    letter-spacing 2px
    color white
    z-index 1
</style>
