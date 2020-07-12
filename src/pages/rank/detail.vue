<template>
  <view class="rank-detail page">
    <with-bg />
    <view style="margin-left: 60upx;margin-top:60upx">
      <button-rank text="竞速无人机排行榜" />
    </view>
    <view style="position: absolute; right:61upx;top:65upx">
      <button-user />
    </view>

    <view style="margin: 47upx 0 78upx;text-align:center">
      <button-avatar4 :user="user" title="您目前排名:" />
    </view>

    <view style="padding: 0 40upx;position: relative">
      <view class="tabs">
        <button-tab :active="item.value == tab.curTab" v-for="item in tab.tabs" :key="item.value" @click="selectTab(item)" :text="item.label"></button-tab>
      </view>
      <border1>
        <view class="list">
          <view class="list-item" v-for="(item, index) in curList" :key="item">
            <button-avatar4 :rank="index + 1" />
          </view>
        </view>
      </border1>
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { authStore } from "../../store/auth";

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

  get user() {
    return authStore.user;
  }

  get curList() {
    return this.list[this.tab.curTab];
  }

  onLoad() {
    authStore.devLogin();
  }

  selectTab(item) {
    this.tab.curTab = item.value;
  }
}
</script>

<style lang="stylus" scoped>
.rank-detail
  padding 120upx 0
  position relative
  .tabs
    display flex
    justify-content center
    position absolute
    width 100%
    z-index 10
    margin-top -20upx
    text-align center
    left 0
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
    padding-top 40upx
    .list-item
      position relative
      transform scale(0.8)
</style>
