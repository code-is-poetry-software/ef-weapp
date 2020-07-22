<template>
  <view class="historyDetails page">
    <with-bg />
    <view style="padding:140upx 62upx 113upx 58upx" class="flex justify-between align-center">
      <button-title1 text="潮玩记录" />
      <icon-details />
    </view>
    <view style="margin: 0 auto 18upx;text-align:center">
      <view class="tabs">
        <button-tab styleClass="font-size: 24rpx;left:22rpx;top: 11rpx;" :active="item.value == tab.curTab" v-for="item in tab.tabs" :key="item.value" @click="selectTab(item)" :text="item.label" />
        <img style="width: 63upx;margin-left: 20upx" src="/static/image/img-dot1.png" mode="widthFix" />
      </view>
    </view>
    <view class="list">
      <view class="list-item" v-for="item in list" :key="item">
        <view style="margin-bottom: 14upx;">
          <button-rank3 :item="item" type="2" />
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import * as api from "../../../common/vmeitime-http";
import { authStore } from "../../store/auth";

@Component
export default class Template extends Vue {
  tab = {
    curTab: "all",
    tabs: [
      { label: "全部", value: "all" },
      { label: "竞速无人机", value: "booked" },
      { label: "对战无人机", value: "finished" }
    ]
  };
  list: any[] = [];
  loading = false;
  onLoad() {
    authStore.devLogin().then(() => {
      this.loadBooking();
    });
  }

  onReachBottom() {
    this.loadBooking();
  }

  async loadBooking() {
    if (this.loading) return;
    this.loading = true;
    const status = this.tab.curTab;
    const res = await api.getList({ type: "score", data: { limit: 10, skip: this.list.length } });
    if (res.data) {
      this.list = [...this.list, ...res.data];
    }
    this.loading = false;
  }

  selectTab(item) {
    this.list = [];
    this.tab.curTab = item.value;
    this.loadBooking();
  }
}
</script>

<style lang="stylus" scoped>
.historyDetails
  position relative
  padding 0 0 200upx 0
  .tabs
    display inline-block
    justify-content center
    align-items flex-end
    .tab
      display inline-block
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
