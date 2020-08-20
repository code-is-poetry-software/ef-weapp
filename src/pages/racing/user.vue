<template>
  <view class="match page">
    <with-bg />
    <view style="text-align: center;">
      <button-avatar2 v-if="user" :item="user" />
    </view>
    <view style="margin-top: 300upx;">
      <button-Arrow :text="text" @click="showSelect = true" />
    </view>
    <u-select mode="single-column" v-model="showSelect" :list="equipments" @confirm="updateEquipment"></u-select>
  </view>
</template>
  
<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { event } from "../../utils/event";
import { authStore } from "../../store/auth";
import * as api from "../../../common/vmeitime-http";
import { User } from "../../type";
import nzhcn from "nzh/cn";
import { storeStore } from "../../store/store";

@Component
export default class UserIndex extends Vue {
  equipmentNum: string = "0";
  project: string = "";
  courseId = ""
  userId = ""
  showSelect = false;
  onLoad(data) {
    if (data.id) {
      this.loadUser(data.id);
      this.userId = data.id
      this.equipmentNum = data.equipmentNum;
      this.project = data.project;
      this.courseId=  data.courseId
    }
  }
  user: User | null = null;
  get text() {
    return this.equipmentNum;
  }

  get storeProjects() {
    return storeStore.projects;
  }

  get equipments() {
    return this.storeProjects[this.project]?.equipments.map(i => ({ value: i.num, label: i.num }));
  }

  async loadUser(id) {
    const res = await api.getItem({ type: "User", id });
    if (res.data) {
      this.user = res.data;
    }
  }
  async updateEquipment(e) {
    console.log(e)
    this.equipmentNum = e[0].value
    const res = await api.handleItem({
      type: "course",
      id: this.courseId,
      method: "PUT",
      data: {
        playerEquipment: {
          playerId: this.userId,
          equipmentNum: this.equipmentNum
        }
      }
    });
  }
}
</script>

<style lang="stylus" scoped>
.match
  position relative
  padding 350upx 0
</style>
