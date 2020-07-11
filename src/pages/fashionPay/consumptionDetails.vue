<template>
  <view class="rank-detail">
    <button-Arrow3 />
    <view>消费明细</view>
    <view>
      <icon-details />
    </view>
    <view class="list">
      <view class="list-item" v-for="item in list" :key="item">
        <button-rank1 class="rank3" :item="item" />
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

@Component
export default class Template extends Vue {
  list = [
    {
      id: 0,
      name: "竞速无人机",
      date: "2020年6月8日",
      score: "5:0"
    },
    {
      id: 0,
      name: "竞速无人机",
      date: "2020年6月8日",
      score: "5:0"
    },
    {
      id: 0,
      name: "竞速无人机",
      date: "2020年6月8日",
      score: "5:0"
    }
  ];
}
</script>

<style lang="stylus" scoped>
.rank-detail
  .list
    text-align center
</style>
