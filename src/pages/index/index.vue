<template>
  <view class="index page">
    <get-phonenumber />
    <login />
    <with-bg :showTop="false" />
    <view>
      <img style="width: 320upx;" src="/static/image/img1.png" mode="widthFix" />
    </view>
    <view style="margin-top: 60upx;">
      <img style="width: 380upx;" src="/static/image/img2.png" mode="widthFix" />
    </view>
    <view style="margin-top: 50upx;" @click="e => goCreateBooking({ url: '/pages/game/car', name: 'EF安亭动力方程公园' })">
      <img style="width: 600upx;" src="/static/image/button-car.png" mode="widthFix" />
    </view>
    <view style="margin-bottom: 40upx; margin-top: 20upx;" @click="e => goCreateBooking({ url: '/pages/game/uav', name: 'EF安亭潮玩公园' })">
      <img style="width: 600upx;" src="/static/image/button-uav.png" mode="widthFix" />
    </view>
    <view style="margin-bottom: 20upx;">
      <view v-for="booking in userBookings" :key="booking.id">
        <view v-for="project in booking.projects" :key="project._id">
          <booking-item :item="booking" :project="project" @click="goBookingDetail(booking)" />
        </view>
      </view>
    </view>
    <view style="margin-bottom: 8upx;">
      <home-menuitem @click="e => navigateTo({ url: '/pages/rank/index', checkAuth: true })" text="EF PARK 排行榜" />
    </view>
    <home-menuitem @click="e => navigateTo({ url: '/pages/user/index', checkAuth: true })" text="我的潮玩ID" />
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { authStore } from "../../store/auth";
import { utils } from "../../utils";
import { storeStore } from "../../store/store";
import { bookingStore } from "../../store/booking";
import * as api from "../../../common/vmeitime-http";

@Component
export default class Index extends Vue {
  get token() {
    return authStore.token;
  }
  get userBookings() {
    return bookingStore.userBookings;
  }

  get user() {
    return authStore.user;
  }

  onLoad(data) {
    storeStore.loadStore();
    this.wechatLogin().then(async () => {
      if (data.bookingId) {
        uni.navigateTo({ url: `/pages/booking/detail?id=${data.bookingId}` });
      }
      if (this.user.role == "manager") {
        uni.redirectTo({ url: "/pages/racing/list" });
      }
      await bookingStore.loadUserBooking();
    });
  }

  onShow() {
    if (!this.token) return;
    bookingStore.loadUserBooking();
  }

  onShareAppMessage(res) {
    return {
      title: "EFPark",
      path: `/pages/index/index`
    };
  }

  async wechatLogin() {
    try {
      await authStore.wechatLogin();
    } catch (err) {
      utils.helper.errorHandler(err);
    }
  }

  goCreateBooking({ url, name }: { url: string; name: string }) {
    storeStore.selectStore({ name });
    this.navigateTo({ url, checkMobile: false });
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
.index
  background #368ad4
  text-align center
  padding 125upx 0
  position relative
.e-button-primary
  width 300upx
  height 200upx
  border-radius 0
  background linear-gradient(117deg, transparent 15px, #58a 0, #58a calc(100% - 15px), transparent 15px) top left
  &:after
    border none
</style>
