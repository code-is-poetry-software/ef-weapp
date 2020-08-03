<template>
  <view class="share column-center">
    <view>
      <img class="icon-user" src="/static/image/icon-user.png" @click="navigateTo({ url: '/pages/user/index' })" mode="widthFix" />
    </view>
    <view class="user-share column-center">
      <button-avatar :user="user" />
      <view class="share-text">
        邀请您一起加入潮玩队伍！
      </view>
    </view>
    <view v-if="booking">
      <view class="share-info" v-for="item in projects" :key="item._id">
        <img class="absolute" style="width: 100%; z-index: -1;" src="/static/image/view1.png" mode="widthFix" />
        <view class="text" style="display: flex;">
          <text class="field-text">
            场次:
          </text>
          <text v-if="booking" style="font-size: 21px; margin-top: -10upx;"> {{ booking.date }}\n{{ booking.checkInAt }} </text>
        </view>
        <view class="text" style="margin-top: 21upx;">
          <span class="field-text">项目:</span>
          <span class="field-text2">{{ item.name }}</span>
        </view>
      </view>
    </view>

    <view @click="handleBooking" style="margin-top: 100upx;">
      <button-pay text="立即加入" />
    </view>
    <text class="remind">为避免入园后长期等待\n 请10:00入场，时段内尽早为您排场\n （注：12:00入园无法时段内排场）</text>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { wechatLogin } from "../../../common/vmeitime-http";
import { authStore } from "../../store/auth";
import * as api from "../../../common/vmeitime-http";
import { Booking } from "../../type";
import { utils } from "../../utils";

@Component
export default class BookingDetail extends Vue {
  booking: Booking | null = null;

  code = "";

  get user() {
    if (!this.booking) return {};
    return this.booking.customer;
  }

  get projects() {
    return this.booking?.tickets[this.booking?.tickets.length - 1]?.projects || [];
  }

  onLoad(data) {
    authStore.wechatLogin().then(() => {
      if (data.code) {
        this.code = data.code;
        this.loading(data.code);
      }
    });
  }

  async loading(code) {
    try {
      const res = await api.joinBooking({ code, preview: true });
      if (res.data) {
        this.booking = res.data;
      }
    } catch (error) {
      if (error.statusCode == 403) {
        setTimeout(() => {
          uni.redirectTo({ url: "/pages/index/index" });
        }, 3000);
      }
    }
  }

  async handleBooking() {
    uni.showLoading();
    const code = this.code;
    const res = await api.joinBooking({ code, preview: false });

    uni.hideLoading();
    if (this.booking?.id) {
      uni.redirectTo({ url: `/pages/index/index?bookingId=${this.booking.id}` });
    }
  }
}
</script>

<style lang="stylus" scoped>
.share
  padding 220upx 0
  .icon-user
    width 76upx
    height 66upx
    position absolute
    right 61upx
    top 65upx
  .user-share
    margin-bottom 80upx
    .share-text
      color var(--text-primary)
      font-size 35upx
      font-family Alibaba PuHuiTi
      font-weight bold
  .share-info
    position relative
    width 540upx
    height 270upx
    margin-bottom 30upx
    display flex
    flex-direction column
    justify-content center
    align-items center
    .text
      width 440upx
      z-index 1
      font-weight bold
      color var(--text-primary)
      font-size 21upx
      font-family Gotham-BoldItalic
      .field-text
        font-size 20upx
        margin-right 18upx
  .field-text2
    position absolute
    font-size 51upx
    top 173upx
  .remind
    margin-top 210upx
    text-align center
    font-size 23upx
    font-family AlibabaPuHuiTiR-GBpc-EUC-H
    color #666666
</style>
