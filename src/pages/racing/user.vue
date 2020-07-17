<template>
  <view class="match page">
    <with-bg />
    <view style="text-align: center">
      <button-avatar2 v-if="user" :user="user" />
    </view>
    <view style="margin-top: 300upx">
      <button-Arrow text="一号无人机" />
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { event } from "../../utils/event";
import { authStore } from "../../store/auth";
import * as api from "../../../common/vmeitime-http";
import { User } from "../../type";

@Component
export default class UserIndex extends Vue {
  onLoad(data) {
    if (data.id) {
      this.loadUser(data.id);
    }
  }
  user: User | null = null;

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
