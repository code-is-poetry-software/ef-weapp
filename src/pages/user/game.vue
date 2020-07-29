<template>
  <view class="user-game page">
    <with-bg />
    <view style="padding: 140upx 62upx 113upx 58upx;" class="flex justify-between align-center">
      <button-title1 text="潮玩项目" />
      <icon-details />
    </view>
    <view class="tabs" style="margin: 0 0 18upx 0;">
      <button-tab1 :active="item.value == tab.curTab" v-for="item in tab.tabs" :key="item.value" @click="selectTab(item)" :text="item.label" />
      <img style="width: 63upx; margin-left: 20upx;height: 9upx;" src="/static/image/img-dot1.png" mode="widthFix" />
    </view>
    <view class="list">
      <view class="list-item" v-for="booking in list" :key="booking.id">
        <view style="margin-bottom: 14upx;" v-for="project in booking.projects" :key="project._id">
          <button-rank1 :item="booking" :project="project" @click="goBookingDetail(booking)" />
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import * as api from "../../../common/vmeitime-http";
import { authStore } from "../../store/auth";
import { bookingStore } from "../../store/booking";

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

  list: any[] = [];
  loading = false;

  get user() {
    return authStore.user;
  }

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
    const res = await api.getList({ type: "booking", data: { customer: this.user.id, status: status == "all" ? null : status, limit: 10, skip: this.list.length } });
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

  async goBookingDetail(item) {
    const payArgs = this._.get(item, "payments.0.payArgs");

    if (payArgs) {
      await bookingStore.handlePayment(payArgs);
    }
    uni.navigateTo({ url: `/pages/booking/detail?id=${item.id}` });
  }
}
</script>

<style lang="stylus" scoped>
.user-game
  position relative
  padding 0 0 200upx 0
  .tabs
    display flex
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
