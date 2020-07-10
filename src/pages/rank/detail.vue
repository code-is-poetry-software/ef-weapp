<template>
  <view class="rank-detail">
    <view>竞速无人机排行榜</view>
    <view class="tabs">
      <view :class="['tab', item.value == tab.curTab ? 'active' : '']" v-for="item in tab.tabs" :key="item.value" @click="selectTab(item)">{{ item.label }}</view>
    </view>
    <view class="list">
      <view class="list-item" v-for="item in curList" :key="item">
        <button-rank1 :item="item" />
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

@Component
export default class Template extends Vue {
  tab = {
    curTab: "all",
    tabs: [
      { label: "总榜", value: "all" },
      { label: "月榜", value: "month" },
      { label: "周榜", value: "week" }
    ]
  };

  list = {
    all: [
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
    ],
    month: [
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
    ],
    week: [
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
    ]
  };

  get curList() {
    return this.list[this.tab.curTab];
  }

  selectTab(item) {
    this.tab.curTab = item.value;
  }
}
</script>

<style lang="stylus" scoped>
.rank-detail
  .tabs
    display flex
    justify-content center
    .tab
      display flex
      align-items center
      padding 40upx
      width 200upx
      height 56upx
      background grey
      margin 0 20upx
      &.active
        background #4d8ad6
  .list
    text-align center
</style>
