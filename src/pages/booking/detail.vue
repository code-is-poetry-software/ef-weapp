<template>
  <view class="payment-success column-center">
    <view>
      <img class="icon-user" src="/static/image/icon-user.png" mode="widthFix" />
    </view>
    <view style="margin-bottom: 72upx">
      <img style="width: 128upx" src="/static/image/img3.png" mode="widthFix" />
    </view>
    <view class="text-success">您已成功缴费锁定</view>
    <view style="margin-bottom: 72upx" v-if="item">
      <view v-for="project in item.projects" :key="project._id">
        <booking-item :item="item" :project="project" />
      </view>
    </view>
    <text class="text-remind">为避免入园后长时间等待\n 请10:00入场，时间段内尽早为您排场\n （注：12:00入园无法时段内排场）</text>

    <view style="position: relative">
      <img style="width: 572upx" src="/static/image/img-share.png" mode="widthFix" />
      <view class="qrcode">
        <canvas canvas-id="qrcode" style="width: 150px;height: 150px;" />
      </view>
    </view>
    <view v-if="item">
      <view v-for="project in item.projects" :key="project._id" style="margin-top: 16upx">
        <button-share :text="project.name" :active.sync="project.active" />
      </view>
    </view>
    <view style="margin-top: 46upx">
      <button-pay @click="inviteFriend" text="邀请好友" />
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import * as api from "../../../common/vmeitime-http";
import { Booking } from "../../type";
import uQRCode from "../../../common/uqrcode";

@Component
export default class PaymentSuccess extends Vue {
  item: Booking | null = null;
  code: string = "";

  onLoad(data) {
    if (data.id) {
      this.loadBooking(data.id);
    }
    this.makeQrcode();
  }

  makeQrcode() {
    uQRCode.make({
      canvasId: "qrcode",
      componentInstance: this,
      text: "uQRCode",
      size: 150,
      margin: 10,
      backgroundColor: "#ffffff",
      foregroundColor: "#000000",
      fileType: "jpg",
      correctLevel: uQRCode.defaults.correctLevel,
      success: res => {
        console.log(res);
      }
    });
  }

  get invitationProjects() {
    if (!this.item) return [];
    return this.item.projects.filter(i => i.active).map(i => ({ name: i.name, count: 1 }));
  }

  async loadBooking(id) {
    const res = await api.getItem({ type: "booking", id });
    if (res.data) {
      this.item = res.data;
      if (this.item) {
        this.item.projects = this.item.projects.map(i => ({ ...i, active: false }));
      }
    }
  }

  onShareAppMessage(res) {
    return {
      title: "邀请你参加游戏",
      path: `/pages/index/index?code=${this.code}`
    };
  }

  async inviteFriend() {
    if (!this.item) return;
    if (this.invitationProjects.length == 0) {
      return uni.showToast({
        title: "请先选择分享的项目",
        icon: "none"
      });
    }
    const res = await api.updateItem({ type: "booking", id: this.item.id, data: { invitation: { projects: this.invitationProjects } } });

    // uni.showShareMenu();
  }
}
</script>

<style lang="stylus" scoped>
.payment-success
  text-align center
  padding 150upx 0
  .icon-user
    width 41px
    height 36px
    position absolute
    right 61upx
    top 65upx
  .remind
    text-align center
  .text-success
    color var(--primary)
    font-size 21px
    font-family Alibaba PuHuiTi
    font-weight bold
    line-height 25px
    margin-bottom 62upx
  .text-remind
    font-size 13px
    font-family AlibabaPuHuiTiR-GBpc-EUC-H
    line-height 18px
    color #666
    margin-bottom 72upx
  .qrcode
    position absolute
    width 100%
    top 40upx
    left 0
    text-align center
    canvas
      display inline-block
</style>
