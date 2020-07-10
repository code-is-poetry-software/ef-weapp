<template>
	<view class="content">
		<view class="user-info">
			<button-pattern/>
		</view>
		<view>
			<button-time/>
		</view>
	</view>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator"
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="stylus" scoped>
  .content
    margin 200upx auto 0
    width 80%
    .user-info
      display flex
      position relative
</style>
