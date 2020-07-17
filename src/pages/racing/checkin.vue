<template>
  <view class="checkin page">
    <with-bg />
    <button-pattern-switcher v-if="projects" :activeItem.sync="item.project" :items="projects" :disabled="type === 'detail'" />

    <view style="margin: 80upx ">
      <u-grid :col="3" :border="false">
        <u-grid-item v-for="item in item.players" :key="item">
          <button-avatar2 type="small" :user="item" @click="goUserDetail(item)" />
        </u-grid-item>
      </u-grid>
    </view>
    <view>
      <view class="button-diamond" @click="scanCode">
        <img class="Diamond" src="/static/image/Button_Diamond.png" mode="widthFix" />
        <view class="text"> 验&nbsp&nbsp票 </view>
      </view>
    </view>
    <view style="margin-top: 105upx;" v-if="type == 'detail'">
      <view class="button-Arrow" @click="startGame">
        <img class="arrow2" src="/static/image/button-Arrow_2.png" mode="widthFix" />
        <view class="text"> 开&nbsp&nbsp&nbsp始 </view>
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
  item = {
    id: null,
    project: "",
    players: []
  };

  get type() {
    return this.item.id ? "detail" : "create";
  }

  get user() {
    return authStore.user;
  }

  get projects() {
    return this.user.store?.projects.map(i => ({ label: i.name, value: i.name }));
  }

  onLoad(data) {
    authStore.devLogin();
    if (data.id) {
      this.loadItem(data.id);
    }
  }

  goUserDetail(item) {
    uni.navigateTo({ url: `/pages/racing/user?id=${item.id}` });
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
  }

  async loadItem(id) {
    const res = await api.getItem({ type: "course", id });
    if (res.data) {
      this.item = res.data;
      return this.item;
    }
  }

  async createCourse(code) {
    const res = await api.handleType({
      type: "course",
      data: {
        project: this.item.project,
        newPlayers: [code]
      }
    });
    if (res.data) {
      this.item = res.data;
    }
  }
  async updateCourse(code) {
    const res = await api.handleItem({
      type: "course",
      id: this.item.id,
      method: "PUT",
      data: {
        newPlayers: [code]
      }
    });
    if (res.data) {
      this.item = res.data;
    }
  }

  scanCode() {
    if (this.type == "create") {
      if (!this.item.project) {
        return uni.showToast({
          title: "请先选择项目",
          icon: "none"
        });
      }
    }
    uni.scanCode({
      success: async data => {
        if (this.type == "create") {
          return this.createCourse(data.result);
        }
        if (this.type == "detail") {
          return this.updateCourse(data.result);
        }
      }
    });
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
