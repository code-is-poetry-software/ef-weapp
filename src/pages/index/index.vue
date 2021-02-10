<template>
  <view class="index page">
    <get-phonenumber />
    <login />
    <with-bg :showTop="false" />
    <view>
      <img style="width: 320upx; height: 46upx;" src="/static/image/img1.png" mode="widthFix" />
    </view>
    <view style="margin: 60upx 0 50upx;">
      <img style="width: 380upx; height: 381upx;" src="/static/image/img2.png" mode="widthFix" />
    </view>
    <view>
      <view @click="e => goCreateBooking({ url: '/pages/game/car', name: 'EF安亭动力方程公园' })">
        <img style="width: 600upx; height: 188upx;" src="/static/image/button-car.png" mode="widthFix" />
      </view>
      <view style="margin-bottom: 40upx; margin-top: 20upx;" @click="e => goCreateBooking({ url: '/pages/game/uav', name: 'EF安亭潮玩公园' })">
        <img style="width: 600upx; height: 188upx;" src="/static/image/button-uav.png" mode="widthFix" />
      </view>

      <view style="margin: 50upx 0 0;">
        <view class="button-course" v-for="(item, index) in userCourses" :key="index" style="margin-bottom:10upx">
          <img class="img" src="/static/image/button-rank1.png" style="height: 154upx;" mode="widthFix" />
          <view class="status">{{ config.statusLabel[item.status] }}</view>
          <view class="info">
            <view class="flex items-center">
              <view style="font-size: 16upx;">项目:</view>
              <view style="font-size: 28upx;">{{ item.project }} </view>
            </view>
            <view class="flex items-center" style="margin-top: 15upx;">
              <view style="font-size: 16upx;">场次:</view>
              <view style="font-size: 28upx; margin-left: 10upx;">#{{ item.sequence }}</view>
              <view style="font-size: 16upx; margin-left: 20upx">玩家:</view>
              <view style="font-size: 28upx; margin-left: 10upx;">{{ item.players.length }}</view>
              <view style="font-size: 28upx; margin-left: 40upx;" v-if="['waiting','checking'].includes(item.status)">
                <text>等待{{ getWaitingCourses(item.project, item.sequence) }}场</text>
              </view>
            </view>
          </view>
        </view>
      </view>

      <view style="margin-bottom: 20upx;">
        <view v-for="booking in userBookings" :key="booking.id">
          <view v-for="ticket in booking.tickets" :key="ticket._id">
            <view v-if="ticket.player.id === user.id">
              <view v-for="project in ticket.projects" :key="project._id">
                <booking-item v-if="project.count > 0" :item="booking" :project="project" @click="goBookingDetail(booking)" />
              </view>
            </view>
          </view>
        </view>
      </view>
      <view style="margin-bottom: 8upx;">
        <home-menuitem @click="e => navigateTo({ url: '/pages/rank/index', checkAuth: true })" text="EF PARK 排行榜" />
      </view>
      <view style="margin-bottom: 16upx;">
        <home-menuitem @click="e => navigateTo({ url: '/pages/user/index', checkAuth: true })" text="我的潮玩ID" />
      </view>
    </view>
    <home-menuitem v-if="user.role == 'manager'" @click="goStore" text="场次管理" />
    <home-menuitem v-if="user.role == 'manager'" @click="goCoach" text="教练入口" />
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { authStore } from "../../store/auth";
import { utils } from "../../utils";
import { storeStore } from "../../store/store";
import { bookingStore } from "../../store/booking";
import { courseStore } from "../../store/course";
import * as api from "../../../common/vmeitime-http";
import { Course } from "../../type";
import { config } from "../../../config";
import { baseStore } from "@/store/base";

@Component
export default class Index extends Vue {
  config = config;

  get storeProjects() {
    return storeStore.projects;
  }

  getWaitingCourses(project, before) {
    if (!before) {
      return this.storeProjects[project]?.waitingCourses || 0;
    } else {
      return before - (this.storeProjects[project]?.firstWaitingCourseSequence || 0) + 1;
    }
  }

  get token() {
    return authStore.token;
  }

  get userBookings() {
    return bookingStore.userBookings;
  }

  get userCourses() {
    return courseStore.userCourses;
  }

  get user() {
    return authStore.user;
  }

  onLoad(data) {
    //轮询店铺
    storeStore.loadStore();
    //登录
    this.wechatLogin().then(async () => {
      //从首页调booking详情
      if (data.bookingId) {
        uni.navigateTo({ url: `/pages/booking/detail?id=${data.bookingId}` });
      }
      await Promise.all([bookingStore.loadUserBooking(), courseStore.loadUserCourse()]);
      baseStore.polling();
    });
  }

  onUnload() {
    baseStore.stopPolling();
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

  goStore() {
    uni.redirectTo({ url: "/pages/racing/list" });
  }
  goCoach() {
    uni.redirectTo({ url: "/pages/racing/coach" });
  }

  goCreateBooking({ url, name }: { url: string; name: string }) {
    storeStore.selectStore({ name });
    this.navigateTo({ url, checkMobile: true, checkAuth: true });
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
