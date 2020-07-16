<template>
  <view class="racing-list">
    <u-cell-group>
      <u-cell-item v-for="item in list" :key="item.id" :title="item.project" @click="goDetail(item)"></u-cell-item>
    </u-cell-group>

    <view style="position: absolute; bottom:0; left:0; z-index; 10;width: 100%">
      <u-button shape="square" @click="navigateTo({ url: '/pages/racing/checkin' })">创建竞赛</u-button>
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { authStore } from "../../store/auth";
import * as api from "../../../common/vmeitime-http";

@Component
export default class Template extends Vue {
  list: any[] = [];
  loading = false;

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
    const res = await api.getList({ type: "course", data: { limit: 10, skip: this.list.length } });
    if (res.data) {
      this.list = [...this.list, ...res.data];
    }
    this.loading = false;
  }

  goDetail(item) {
    uni.navigateTo({ url: `/pages/racing/checkin?id=${item.id}` });
  }
}
</script>

<style lang="stylus" scoped>
.title
  font-size 20upx
</style>
