<template>
  <view class="booking-detail column-center page">
    <with-bg />
    <view>
      <img class="icon-user" src="/static/image/icon-details.png" @click="navigateTo({ url: '/pages/index/index', redirect: true })" mode="widthFix" />
    </view>
    <view style="margin-bottom: 72upx">
      <img style="width: 128upx; height: 128upx" src="/static/image/img3.png" mode="widthFix" />
    </view>
    <view class="text-success">{{ course.length ? "您已核销成功" : "您已成功缴费锁定" }}</view>

    <view style="margin: 50upx 0">
      <view class="button-course" v-for="(item, index) in userCourses" :key="index">
        <img class="img" src="/static/image/button-rank1.png" style="height: 154upx" mode="widthFix" />
        <view class="status">{{ config.statusLabel[item.status] }}</view>
        <view class="info">
          <view class="flex items-center">
            <view style="font-size: 16upx">项目:</view>
            <view style="font-size: 28upx">{{ item.project }} </view>
          </view>
          <view class="flex items-center" style="margin-top: 20upx">
            <view style="font-size: 16upx">时段:</view>
            <view style="font-size: 28upx">{{ item.checkInAt }}</view>
            <view style="font-size: 28upx; margin-left: 20upx">#{{ item.sequence }}</view>
            <view style="font-size: 28upx; margin-left: 40upx">{{ item.players.length }}玩家</view>
            <view style="font-size: 28upx; margin-left: 40upx" v-if="item.status == 'waiting'">
              <text>等待{{ getWaitingCourses(item.project, item.sequence) }}场</text>
            </view>
          </view>
        </view>
      </view>
    </view>

    <view style="position: relative">
      <img style="width: 572upx; height: 368upx" src="/static/image/img-share.png" mode="widthFix" />
      <view class="qrcode">
        <img v-show="qrcodeUrl" :src="qrcodeUrl" style="width: 200px; height: 200px;" mode="widthFix" />
      </view>
    </view>
    <text class="text-remind" style="font-size: 23upx" v-if="item">为避免入园后长时间等待\n 请{{ item.checkInAt }}入场，时间段内尽早为您排场\n （注：请靠近前时段入园，后时段入园无法时段内排场）</text>
    <view v-if="item">
      <view style="margin-bottom: 72upx" v-if="userTickets">
        <view v-for="project in userTickets.projects" :key="project._id">
          <booking-item v-if="project.count > 0" :selectable="isOwner" :item="item" :project="project" :active="invitationProjectIds.includes(project._id)" @click="selectProject(project)" />
        </view>
      </view>
    </view>
    <view v-if="isOwner" style="margin-top: 46upx">
      <view class="button-invite" @click="inviteFriend">
        <img class="img" src="/static/image/button-invite.png" mode="widthFix" />
        <view class="text"> 邀请好友 </view>
      </view>
    </view>
    <u-popup v-model="showShare" mode="bottom">
      <u-button class="main" type="primary" open-type="share" @click="share">确认分享</u-button>
    </u-popup>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import * as api from "../../../common/vmeitime-http";
import { Booking, Course } from "../../type";
import { authStore } from "../../store/auth";
import { config } from "../../../config";
import { storeStore } from "../../store/store";
import { courseStore } from "@/store/course";

@Component
export default class PaymentSuccess extends Vue {
  item: Booking | null = null;
  code: string = "";
  showShare = false;
  config = config;
  id = null;
  invitationProjectIds: string[] = [];

  get user() {
    return authStore.user;
  }

  get storeProjects() {
    return storeStore.projects;
  }

  get userCourses() {
    return courseStore.userCourses;
  }

  getWaitingCourses(project, before) {
    if (!before) {
      return this.storeProjects[project]?.waitingCourses || 0;
    } else {
      return before - (this.storeProjects[project]?.firstWaitingCourseSequence || 0) + 1;
    }
  }

  get userTickets() {
    return this.item?.tickets.find(i => i.player.id == this.user.id);
  }

  get isOwner() {
    if (!this.item) return false;
    return this.item.customer.id == this.user.id;
  }

  get invitationProjects() {
    if (!this.userTickets) return [];
    return this.userTickets.projects.filter(i => this.invitationProjectIds.includes(i._id)).map(i => ({ name: i.name, count: 1 }));
  }

  onLoad(data) {
    if (data.id) {
      this.id = data.id;
      courseStore.loadUserCourse();
      this.loadBooking(data.id).then(data => {
        if (!data) return;
        const ticket = data.tickets.find(i => i.player?.id === this.user.id);
        if (ticket) {
          this.getQrcodeImageUrl({ text: ticket.code });
        }
      });
    }
  }

  selectProject(project) {
    if (this.invitationProjectIds.includes(project._id)) {
      this.invitationProjectIds = this.invitationProjectIds.filter(id => id !== project.id);
    } else {
      this.invitationProjectIds.push(project._id);
    }
  }

  qrcodeUrl = "";
  getQrcodeImageUrl({ text }) {
    this.qrcodeUrl = `${config.API_ENDPOINT}/qrcode-image/${text}`;
  }

  checkTimer: any = null;

  @Watch("userTickets")
  checkBooking() {
    if (this.userTickets && this.userTickets.projects.every(i => i.count === 0)) {
      uni.navigateBack({});
    }
  }

  async loadBooking(id = this.id) {
    const res = await api.getItem({ type: "booking", id });
    if (res.data) {
      this.item = res.data;
      return this.item;
    }
  }

  onShareAppMessage(res) {
    const that = this;
    const path = `/pages/booking/share?code=${this.code}`;
    return {
      title: `${this.user.name}邀请您一起潮玩`,
      path
    };
  }

  share() {
    this.showShare = false;
  }

  async inviteFriend() {
    if (!this.item) return;
    if (this.invitationProjects.length == 0) {
      return uni.showToast({
        title: "请先选择分享的项目",
        icon: "none"
      });
    }
    const res = await api.handleItem({ type: "booking", id: this.item.id, method: "PUT", data: { invitation: { projects: this.invitationProjects } } });
    if (!res.data.tickets) return;
    const { code } = this._.last(res.data.tickets) as any;
    this.code = code;
    console.log(this.code);
    this.showShare = true;
  }
}
</script>

<style lang="stylus" scoped>
.booking-detail
  position relative
  text-align center
  padding 150upx 0
  .icon-user
    width 76upx
    height 66upx
    position absolute
    right 61upx
    top 65upx
  .remind
    text-align center
  .text-success
    color var(--primary)
    font-size 38upx
    font-family Alibaba PuHuiTi
    font-weight bold
    line-height 25upx
    margin-bottom 62upx
  .text-remind
    font-size 23upx
    font-family AlibabaPuHuiTiR-GBpc-EUC-H
    line-height 33upx
    color #666666
    margin-bottom 72upx
  .qrcode
    position absolute
    display flex
    justify-content center
    align-items center
    width 100%
    top -50upx
    left 0
  .button-invite
    position relative
    display inline-block
    align-items center
    margin 0 8upx
    text-align center
    .img
      width 240upx
      height 96upx
    .text
      position absolute
      font-size 30upx
      font-family Alibaba PuHuiTi
      left 56upx
      top 16upx
      font-weight bold
      letter-spacing 2px
      color white
      z-index 1
  u-button.main >>> button
    height 100upx
    border-radius 0
</style>
