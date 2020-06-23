<template>
  <view class="user-history">
    <view>潮玩项目</view>
    <view class="tabs">
      <view :class="['tab', item.value == tab.curTab ? 'active' : '']" v-for="item in tab.tabs" :key="item.value" @click="selectTab(item)">{{ item.label }}</view>
    </view>
    <view class="list">
      <view class="list-item" v-for="item in curList" :key="item">
        <view>{{ item }}</view>
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
      { label: "全部", value: "all" },
      { label: "竞速无人机", value: "uav1" },
      { label: "对战无人机", value: "uav2" }
    ]
  };

  list = {
    all: [1, 2, 3, 4, 5],
    uav1: [5, 4, 3, 2, 1],
    uav2: [2, 3, 4, 5, 6]
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
.user-history
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
