<template>
  <view class="checkin page">
    <u-radio-group v-model="form.sequence" @change="radioGroupChange">
      <u-radio @change="radioChange" v-for="(item, index) in list" :key="index" :name="item.sequence">
        {{ item.sequence }}
      </u-radio>
    </u-radio-group>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import * as api from "../../../common/vmeitime-http";
import { authStore } from "../../store/auth";
import { Course, Booking } from "../../type";
import { Moment } from "moment";

@Component
export default class Template extends Vue {
  list: Course[] = [];
  form = {
    sequence: 0
  };
  booking: Booking | null = null;

  now: Moment = this.moment();

  get user() {
    return authStore.user;
  }

  get projects() {
    return this.user.store?.projects.map(i => ({ label: i.name, value: i.name }));
  }

  onLoad(data) {
    authStore.devLogin().then(async () => {
      if (data.code) {
        const res = await api.joinBooking({ code: data.code, preview: true });
        if (res.data) {
          this.booking = res.data;
        }
      }
      this.loadList();
    });
  }
  radioChange(e) {}

  radioGroupChange(e) {
    this.form.sequence = e;
  }

  goUserDetail(item) {
    uni.navigateTo({ url: `/pages/racing/user?id=${item.id}&equipmentNum=${item.equipmentNum}` });
  }

  // async startGame() {
  //   const res = await api.handleItem({
  //     type: "course",
  //     id: this.item.id,
  //     method: "PUT",
  //     data: {
  //       startNow: true
  //     }
  //   });
  //   if (res.data) {
  //     this.item = res.data;
  //   }
  //   this.checkTime();
  // }

  checkTimeInterval: any;
  checkTime() {
    if (this.checkTimeInterval) clearInterval(this.checkTimeInterval);

    this.checkTimeInterval = setInterval(() => {
      this.now = this.moment();
    }, 1000);
  }

  async loadList() {
    const res = await api.getList({ type: "course", data: { status: "checking", limit: 5, sort: "sequence", store: this.user.store?.id } });
    if (res.data) {
      this.list = res.data.sort((a, b) => a.sequence - b.sequence);
      this.checkTime();

      return this.list;
    }
  }

  // reset() {
  //   this.item = {
  //     id: "",
  //     project: "",
  //     players: []
  //   };
  //   if (this.checkTimeInterval) clearInterval(this.checkTimeInterval);
  // }

  // async updateCourse(code) {
  //   const res = await api.handleItem({
  //     type: "course",
  //     id: this.item.id,
  //     method: "PUT",
  //     data: {
  //       newPlayers: [code]
  //     }
  //   });
  //   if (res.data) {
  //     this.item = res.data;
  //   }
  // }
}
</script>

<style lang="stylus" scoped>
.checkin
  position relative
  padding 200upx 0
</style>
