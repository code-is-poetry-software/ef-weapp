<template>
  <view class="racing-list">
    <u-tabs ref="tabs" :list="projects" :is-scroll="false" :current="currentTabIndex" @change="changeTab"></u-tabs>
    <u-cell-group>
      <u-cell-item v-for="item in list" :key="item.id" :title="getTitle(item)" @click="goDetail(item)"></u-cell-item>
    </u-cell-group>

    <view style="position: absolute; bottom:0; left:0; z-index; 10;width: 100%">
      <u-button shape="square" @click="createCourse">创建竞赛</u-button>
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
  currentTabIndex = 0;
  changeTab(index) {
    this.list = [];
    this.currentTabIndex = index;
    this.loadList();
  }
  getTitle(item) {
    return item.project + this.moment(item.createdAt).format("YYYY-MM-DD hh:mm:ss");
  }

  onReachBottom() {
    this.loadList();
  }

  get token() {
    return authStore.token;
  }

  get user() {
    return authStore.user;
  }

  get projects() {
    return this.user.store?.projects.map(i => ({ name: i.name }));
  }

  get curProject() {
    if (!this.projects) return "";
    return this.projects[this.currentTabIndex].name;
  }

  onLoad() {
    authStore.devLogin().then(() => {
      this.loadList();
    });
  }

  onShow() {
    if (!this.token) return;
    this.list = [];
    this.loadList();
  }

  createCourse() {
    uni.scanCode({
      success: async data => {
        const code = data.result;
      }
    });
  }

  async loadList() {
    if (this.loading) return;
    this.loading = true;
    const res = await api.getList({ type: "course", data: { status: "checking", project: this.curProject, limit: 10, skip: this.list.length, store: this.user.store?.id } });
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
