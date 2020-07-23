<template>
  <view class="rank-detail page">
    <with-bg />
    <view style="margin-left: 60upx; margin-top: 60upx;">
      <button-rank text="竞速无人机排行榜" />
    </view>
    <view style="position: absolute; right: 61upx; top: 65upx;">
      <button-user />
    </view>

    <view style="margin: 47upx 0 78upx; text-align: center;">
      <button-avatar4 v-if="userScore" :item="userScore" title="您目前排名:" :rank="userScore.rankInCourse + 1" />
    </view>

    <view style="padding: 0 40upx; position: relative;">
      <view class="tabs">
        <button-tab
          styleClass="margin-top:-50rpx;letter-spacing: 17px;"
          :active="item.value == tab.curTab"
          v-for="item in tab.tabs"
          :key="item.value"
          @click="selectTab(item)"
          :text="item.label"
        ></button-tab>
      </view>
      <border1>
        <view class="list">
          <view class="list-item" v-for="(item, index) in curList" :key="item">
            <button-avatar4 :rank="index + 1" :item="item" />
          </view>
        </view>
      </border1>
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { authStore } from "../../store/auth";
import * as api from "../../../common/vmeitime-http";

@Component
export default class Template extends Vue {
  tab = {
    curTab: "all",
    tabs: [
      { label: "总榜", value: "all" },
      { label: "月榜", value: "this-month" },
      { label: "周榜", value: "this-week" }
    ]
  };
  project = "";

  list = {
    all: [],
    "this-month": [],
    "this-week": []
  };

  get user() {
    return authStore.user;
  }

  get curList() {
    return this.list[this.tab.curTab];
  }

  set curList(val) {
    this.list[this.tab.curTab] = val;
  }

  onLoad(data) {
    if (data.project) {
      this.project = data.project;
    }
    authStore.devLogin().then(() => {
      this.loadRankList();
      this.loadUserScore();
    });
  }

  selectTab(item) {
    this.tab.curTab = item.value;
    this.curList = [];
    this.userScore = null;
    this.loadRankList();
    this.loadUserScore();
  }

  loading = false;
  async loadRankList() {
    if (this.loading) return;
    this.loading = true;
    const { curTab } = this.tab;
    const res = await api.getList({ type: "score", data: { limit: 10, skip: this.curList.length, sort: "-value", project: this.project, withRankIn: curTab == "all" ? "" : curTab } });
    if (res.data) {
      this.curList = [...this.curList, ...res.data];
    }
    this.loading = false;
  }

  userScore: any = null;
  async loadUserScore() {
    const { curTab } = this.tab;
    const res = await api.getList({
      type: "score",
      data: { limit: 1, player: this.user.id, sort: "-value", skip: this.curList.length, project: this.project, withRankIn: curTab == "all" ? "" : curTab }
    });
    if (res.data) {
      this.userScore = res.data[0];
    }
  }
}
</script>

<style lang="stylus" scoped>
.rank-detail
  padding 120upx 0 300upx
  position relative
  .tabs
    display flex
    justify-content center
    position absolute
    width 100%
    z-index 10
    margin-top -20upx
    text-align center
    left 0
    .tab
      display flex
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
    padding 40upx 0
    .list-item
      position relative
      transform scale(0.8)
</style>
