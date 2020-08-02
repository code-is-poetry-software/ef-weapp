<template>
  <view class="match page">
    <with-bg />
    <view style="text-align: center">
      <button-avatar2 v-if="user" :user="user" />
    </view>
    <view style="margin-top: 300upx">
      <button-Arrow :text="text" />
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { event } from "../../utils/event";
import { authStore } from "../../store/auth";
import * as api from "../../../common/vmeitime-http";
import { User } from "../../type";
import nzhcn from "nzh/cn";

@Component
export default class UserIndex extends Vue {
  equipmentNum: string = "0";
  onLoad(data) {
    if (data.id) {
      this.loadUser(data.id);
      this.equipmentNum = data.equipmentNum;
    }
  }
  user: User | null = null;
  get text() {
    return nzhcn.encodeS(this.equipmentNum) + "号无人机";
  }

  async loadUser(id) {
    const res = await api.getItem({ type: "User", id });
    if (res.data) {
      this.user = res.data;
    }
  }
}
</script>

<style lang="stylus" scoped>
.match
  position relative
  padding 350upx 0
</style>
