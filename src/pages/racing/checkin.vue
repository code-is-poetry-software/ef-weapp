<template>
  <view class="checkin page">
    <with-bg />
    <view style="margin-bottom: 72upx;" v-if="userTickets">
      <view v-for="project in userTickets.projects" :key="project._id">
        <booking-item selectable :item="booking" :project="project" :active="project.name == curProject" @click="seletProject(project)" />
      </view>
    </view>
    <!-- <view class="select-bar">
      <u-radio-group v-model="form.sequence" @change="radioGroupChange">
        <u-radio @change="radioChange" v-for="(item, index) in list" :key="index" :name="item.sequence"> #{{ item.sequence }} / {{ item.players.length }}人 </u-radio>
      </u-radio-group>
    </view> -->
    <view>
      <view v-for="(item, index) in list" :key="index" style="margin: 20upx;">
        <u-button throttle-time="50" :type="form.sequence == item.sequence ? 'primary' : 'default'" @click="radioChange(item)">#{{ item.sequence }} / {{ item.players.length }}人</u-button>
      </view>
    </view>

    <view style="position: absolute; bottom:0; left:0; z-index; 10;width: 100%">
      <u-button class="main" type="primary" shape="square" :ripple="true" @click="updateCourse" :disabled="!curentSelectdCourse">加入到排场</u-button>
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import * as api from "../../../common/vmeitime-http";
import { authStore } from "../../store/auth";
import { Course, Booking } from "../../type";
import { Moment } from "moment";
import { moment } from "../../utils/moment";
import { storeStore } from "@/store/store";

@Component
export default class Template extends Vue {
  list: Course[] = [];
  form = {
    sequence: 0
  };
  booking: Booking | null = null;

  now: Moment = this.moment();
  curProject = "";
  code = "";

  get user() {
    return authStore.user;
  }

  get projects() {
    return this.user.store?.projects.map(i => ({ label: i.name, value: i.name }));
  }

  get storeProjects() {
    return storeStore.projects;
  }

  get userTickets() {
    return this.booking?.tickets[0];
  }

  get curentSelectdCourse() {
    return this.list.find(i => i.sequence == this.form.sequence);
  }

  seletProject(project) {
    this.curProject = project.name;
    this.list = [];
    this.loadData();
    storeStore.loadStore();
  }

  onLoad(data) {
    authStore.devLogin().then(async () => {
      if (data.code) {
        this.code = data.code;
        this.loadBooking();
        storeStore.loadStore();
      }
    });
  }

  async loadBooking() {
    const res = await api.joinBooking({ code: this.code, preview: true });
    if (res.data) {
      this.booking = res.data;
    }
  }
  radioChange(e) {
    this.form.sequence = e.sequence;
  }

  goUserDetail(item) {
    uni.navigateTo({ url: `/pages/racing/user?id=${item.id}&equipmentNum=${item.equipmentNum}` });
  }

  async loadData() {
    const res = await api.getList({
      type: "course",
      data: { project: this.curProject, status: "checking", limit: 5, order: "sequence", store: this.user.store?.id }
    });
    if (res.data) {
      this.list = res.data.sort((a, b) => a.sequence - b.sequence);

      return this.list;
    }
  }

  async updateCourse() {
    if (!this.curentSelectdCourse) return;
    const res = await api.handleItem({
      type: "course",
      id: this.curentSelectdCourse.id,
      method: "PUT",
      data: {
        newPlayers: [this.code]
      }
    });
    await Promise.all([this.loadBooking(), this.loadData(), authStore.loadManagerStore()]);
  }
}
</script>

<style lang="stylus" scoped>
.checkin
  position relative
  padding 200upx 0
  .select-bar
    display flex
    justify-content center
    padding 50upx
u-button.main >>> button
  height 100upx
</style>
