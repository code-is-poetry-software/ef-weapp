<template>
  <view class="checkin page">
    <with-bg />
    <view v-if="item.id">
      <view class="sequence"># {{item.sequence}}</view>
      <button-pattern-switcher :activeItem.sync="item.project" :items="projects" :disabled="type === 'detail'" />
      <view style="margin: 80upx;" v-if="item.players">
        <u-grid :col="3" :border="false">
          <u-grid-item v-for="user in item.players" :key="user.id">
            <button-avatar2 type="small" :item="user" @click="goUserDetail(user)" />
          </u-grid-item>
        </u-grid>
      </view>

      <view v-if="item.start && !item.end">
        <view class="time-between">{{ status === "reset" ? "00:00" : timeBetween }}</view>
        <view style="margin-top: 85upx;">
          <button-time @click="reset" />
        </view>
        <view style="margin-top: 85upx;" v-if="status == 'init'">
          <view class="button-Arrow" @click="endGame">
            <img class="arrow2" src="/static/image/button-Arrow_2.png" mode="widthFix" />
            <view class="text"> 结&nbsp;&nbsp;&nbsp;束 </view>
          </view>
        </view>
      </view>
      <view v-if="!item.start || status == 'reset'">
        <view style="margin-top: 85upx;" v-if="item.players.length">
          <view class="button-Arrow" @click="startGame">
            <img class="arrow2" src="/static/image/button-Arrow_2.png" mode="widthFix" />
            <view class="text"> 开&nbsp;&nbsp;&nbsp;始 </view>
          </view>
        </view>
        <view style="margin-top: 85upx;" v-else>
          <view class="button-Arrow" @click="skipGame">
            <img class="arrow2" src="/static/image/button-Arrow_2.png" mode="widthFix" />
            <view class="text"> 跳&nbsp;&nbsp;&nbsp;过 </view>
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

  status: "init" | "reset" = "init";

  get timeBetween() {
    if (!this.item?.checkpoints?.length) return "";
    const latestCheckpoint = this.item.checkpoints[this.item.checkpoints.length - 1];
    return this.moment(this.now.diff(latestCheckpoint)).format("mm:ss");
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

  onUnload() {
    clearInterval(this.timer);
  }

  reset() {
    uni.showModal({
      title: "提醒",
      content: "确认重置",
      success: async e => {
        if (!e.confirm) return;
        this.status = "reset";
      }
    });
  }

  onShow() {
    this.loadItem();
  }

  goUserDetail(user) {
    uni.navigateTo({ url: `/pages/racing/user?id=${user.id}&equipmentNum=${user.equipmentNum}&project=${this.item.project}&courseId=${this.item.id}` });
  }
  async startGame() {
    uni.showModal({
      title: "提醒",
      content: this.item.start ? "确认创建检查点" : "确认开始",
      success: async e => {
        if (!e.confirm) return;
        const res = await api.handleItem({
          type: "course",
          id: this.item.id,
          method: "PUT",
          data: this.item.start
            ? {
                checkpoint: true
              }
            : {
                startNow: true,
                checkpoint: true
              }
        });
        this.status = "init";
        if (res.data) {
          this.item = { ...res.data, checkpoints: [this.moment().format("YYYY-MM-DD hh:mm:ss")] };
        }
        this.checkTime();
      }
    });
  }

  async endGame() {
    uni.showModal({
      title: "提醒",
      content: "确认结束",
      success: async e => {
        if (!e.confirm) return;
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
    });
  }

  async skipGame() {
    uni.showModal({
      title: "提醒",
      content: "确认跳过空场次",
      success: async e => {
        if (!e.confirm) return;
        const res = await api.handleItem({
          type: "course",
          id: this.item.id,
          method: "PUT",
          data: {
            skipNow: true
          }
        });
        this.item = {};
      }
    });
  }

  checkTimeInterval: any;

  checkTime() {
    if (this.checkTimeInterval) clearInterval(this.checkTimeInterval);
    this.checkTimeInterval = setInterval(() => {
      this.now = this.moment();
    }, 100);
  }

  async loadItem() {
    const res = await api.getList({ type: "course", data: { status: "checking,waiting,started", limit: 1, order: "sequence" } });
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
  padding 100upx 0 200upx
  .sequence
    text-align right
    margin -60upx 80upx 0
    color #0090d9
    font-family Gotham-Bold, san-serif
    font-size 50upx
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
  .time-between
    text-align center
    font-size 100upx
    color #0090d9
    font-family Gotham-Bold, san-serif
</style>
