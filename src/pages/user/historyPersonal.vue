<template>
  <view class="user-history page">
    <view style="padding:140upx 62upx 113upx 58upx" class="flex justify-between align-center">
      <button-title1 text="潮玩记录" />
      <icon-details />
    </view>
		<view  class="content">
			<view class="user-info">
				<button-avatar1 :user="user" />
			</view>
		</view>
		<view style="color: #FFFFFF;margin-top: 25upx;">
			<button-rank3  :user="user"/>
		</view>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import * as api from "../../../common/vmeitime-http";
import { authStore } from "../../store/auth";

@Component
export default class Template extends Vue {
  onLoad() {
    authStore.devLogin();
  }
  get user() {
    return authStore.user;
  }
	
}
</script>

<style lang="stylus" scoped>
.user-history
  position relative
  .content
    margin 0 auto
    width 80%
	.user-info
		display flex
		position relative
  .list
    text-align center
	  
	.info
	  position absolute
	  left 110upx
	  top 13upx
	  font-size 28upx
	  font-family Alibaba PuHuiTi
	  font-weight bold
	  letter-spacing 2px
	  // color #FFFFFF
	  z-index 1
</style>
