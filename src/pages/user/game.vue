<template>
  <view class="user-history">
    <with-bg />
    <view style="margin:140upx 0 113upx 58upx">
      <button-title1 text="潮玩项目" />
    </view>
    <view class="tabs" style="margin: 0 0 18upx 0">
      <button-tab1 :active="item.value == tab.curTab" v-for="item in tab.tabs" :key="item.value" @click="selectTab(item)" :text="item.label" />
      <img style="width: 63upx;margin-left: 20upx" src="/static/image/img-dot1.png" mode="widthFix" />
    </view>
    <view class="list">
      <view class="list-item" v-for="item in list" :key="item">
        <view style="margin-bottom: 14upx">
          <button-rank2 />
        </view>
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
      { label: "已预约", value: "booked" },
      { label: "已完成", value: "finished" },
      { label: "已取消", value: "canceled" }
    ]
  };

  list = [1, 2, 3, 4, 5];

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
    align-items flex-end
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
