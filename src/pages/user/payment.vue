<template>
  <view class="user-payment page">
    <with-bg />
    <view style="padding: 140upx 62upx 113upx 58upx;" class="flex justify-between align-center">
      <button-title1 text="消费明细" />
      <icon-details />
    </view>
    <view class="list">
      <view class="list-item" v-for="item in list" :key="item">
        <view style="margin-bottom: 17upx;">
          <button-payment :item="item" />
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
  list: any[] = [];
  loading = false;

  get user() {
    return authStore.user;
  }

  onReachBottom() {
    this.loadPayment();
  }

  onLoad() {
    authStore.devLogin().then(() => {
      this.loadPayment();
    });
  }

  async loadPayment() {
    if (this.loading) return;
    this.loading = true;
    const res = await api.getList({ type: "payment", data: { customer: this.user.id, limit: 10, skip: this.list.length } });
    if (res.data) {
      this.list = [...this.list, ...res.data];
    }
    this.loading = false;
  }
}
</script>

<style lang="stylus" scoped>
.user-payment
  position relative
  padding 0 0 200upx 0
</style>
