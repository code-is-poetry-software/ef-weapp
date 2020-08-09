<template>
  <view class="checkin page">
    <with-bg />
    <view v-if="item.id">
      <button-pattern-switcher :activeItem.sync="item.project" :items="projects" :disabled="type === 'detail'" />
      <view style="margin: 80upx;" v-if="item.players">
        <u-grid :col="3" :border="false">
          <u-grid-item v-for="item in item.players" :key="item">
            <button-avatar2 type="small" :item="item" @click="goUserDetail(item)" />
          </u-grid-item>
        </u-grid>
      </view>
      <view v-if="item.start && !item.end">
        <view style="text-align: center; font-size: 100upx; color: #0090d9;">{{ timeBetween }}</view>
        <view style="margin-top: 155upx;">
          <view class="button-Arrow" @click="endGame">
            <img class="arrow2" src="/static/image/button-Arrow_2.png" mode="widthFix" />
            <view class="text"> 结&nbsp&nbsp&nbsp束 </view>
          </view>
        </view>
      </view>
      <view v-else>
        <view style="margin-top: 105upx;">
          <view class="button-Arrow" @click="startGame">
            <img class="arrow2" src="/static/image/button-Arrow_2.png" mode="widthFix" />
            <view class="text"> 开&nbsp&nbsp&nbsp始 </view>
          </view>
        </view>
      </view>
    </view>
    <view v-else>
      <u-empty text="当前无正在进行的项目"> </u-empty>
      <view class="flex justify-center">
        <u-button size="medium" @click="loadItem">刷新</u-button>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import * as api from "../../../common/vmeitime-http";
import { authStore } from "../../store/auth";
import { Course } from "../../type";
import { Moment } from "moment";

@Component
export default class Template extends Vue {
  item: Partial<Course> = {};

  now: Moment = this.moment();

  get timeBetween() {
    if (!this.item.start) return "";
    return this.moment(this.now.diff(this.item.start)).format("mm’ss");
  }

  get type() {
    return this.item.id ? "detail" : "create";
  }

  get user() {
    return authStore.user;
  }

  get projects() {
    return this.user.store?.projects.map(i => ({ label: i.name, value: i.name }));
  }

  timer: any = null;

  onLoad(data) {
    authStore.devLogin().then(() => {
      this.loadItem();

      this.timer = setInterval(() => {
        this.loadItem();
      }, 10000);
    });
  }

  goUserDetail(item) {
    uni.navigateTo({ url: `/pages/racing/user?id=${item.id}&equipmentNum=${item.equipmentNum}` });
  }

  async startGame() {
    const res = await api.handleItem({
      type: "course",
      id: this.item.id,
      method: "PUT",
      data: {
        startNow: true
      }
    });
    if (res.data) {
      this.item = res.data;
    }
    this.checkTime();
  }

  async endGame() {
    const res = await api.handleItem({
      type: "course",
      id: this.item.id,
      method: "PUT",
      data: {
        endNow: true
      }
    });
    this.item = {};
    this.loadItem();
  }

  checkTimeInterval: any;
  checkTime() {
    if (this.checkTimeInterval) clearInterval(this.checkTimeInterval);

    this.checkTimeInterval = setInterval(() => {
      this.now = this.moment();
    }, 1000);
  }

  async loadItem() {
    const res = await api.getList({ type: "course", data: { status: "waiting,started", limit: 1, order: "sequence" } });
    this.item = {};
    if (res.data[0]) {
      this.item = res.data[0];
      this.checkTime();

      return this.item;
    }
  }
}
</script>

<style lang="stylus" scoped>
.checkin
  position relative
  padding 200upx 0
  .button-diamond
    position relative
    display flex
    align-items center
    justify-content center
    .Diamond
      width 301upx
      height 130upx
    .text
      position absolute
      font-size 50rpx
      color #0090D9
  .button-Arrow
    // position relative
    display flex
    align-items center
    justify-content center
    .arrow2
      width 600upx
      height 150upx
      color #0090D9
    .text
      position absolute
      color White
      font-size 100upx
</style>
