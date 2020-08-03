<template>
  <view class="car">
    <view>
      <with-bg />
      <view>
        <button-title text="选择模式" />
      </view>
      <view>
        <img class="icon-user" src="/static/image/icon-user.png" @click="navigateTo({ url: '/pages/user/index' })" mode="widthFix" />
      </view>

      <view class="mode-list">
        <view v-for="item in mode.modes" :key="item.label" class="list-item flex items-center">
          <button-mode :text="item.label" :amount.sync="item.amount" />
        </view>
      </view>
    </view>

    <u-form :model="form" ref="uForm" class="form">
      <view class="u-flex u-flex-row form-item" @click="date.show = true">
        <button-title text="选择日期" />
        <view style="margin: 20upx 0 0 20upx;">
          <span class="with-border">{{ date.selected.year }}</span>
          <span class="color-blue" style="margin: 0 12upx;">年</span>
          <span class="with-border">{{ date.selected.month }}</span>
          <span class="color-blue" style="margin: 0 12upx;">月</span>
          <span class="with-border">{{ date.selected.day }}</span>
          <span class="color-blue" style="margin: 0 12upx;">日</span>
        </view>
        <u-calendar v-model="date.show" mode="date" @change="e => (date.selected = e)"></u-calendar>
      </view>
      <view class="u-flex u-flex-row form-item" @click="checkIn.show = true">
        <button-title text="选择场次" />
        <view class="with-border" style="margin: 20upx 0 0 20upx;">{{ form.checkIn }}</view>
        <u-select mode="single-column" v-model="checkIn.show" :list="checkInTimeOptions" @confirm="e => (form.checkIn = e[0].value)"></u-select>
      </view>
      <view class="price-bar">
        <button-price :text="price" />
      </view>

      <view class="column-center">
        <button-pay @click="createBooking" text="立即支付" />
        <view style="margin-top: 20upx;">
          <u-radio-group :value="submit.useBalance" v-if="balanceEnough">
            <u-radio name="useBalance" @change="radioChange">使用余额支付</u-radio>
          </u-radio-group>
        </view>
      </view>
    </u-form>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import _moment from "moment";
import { bookingStore } from "../../store/booking";
import { storeStore } from "../../store/store";
import { authStore } from "../../store/auth";
import * as api from "../../../common/vmeitime-http";
const today = _moment();

@Component
export default class Car extends Vue {
  form = {
    checkIn: ""
  };
  date = {
    show: false,
    selected: {
      day: today.dates(),
      month: today.month() + 1,
      result: today.format("YYYY-MM-DD"),
      year: today.year()
    }
  };
  checkIn = {
    show: false
  };
  submit = {
    useBalance: "useBalance"
  };

  mode = {
    modes: [
      { label: "赛车电竞", amount: "0" },
      { label: "对战无人机", amount: "0" },
      { label: "竞速无人机", amount: "0", size: "large" }
    ]
  };
  get user() {
    return authStore.user;
  }
  get projects() {
    return this.mode.modes.filter(i => Number(i.amount) > 0).map(i => ({ name: i.label, count: Number(i.amount) }));
  }

  get curStore() {
    return storeStore.curStore;
  }

  get payable() {
    return this.mode.modes.some(i => Number(i.amount) > 0) && this.form.checkIn;
  }

  get checkInTimeOptions() {
    return this.curStore.checkInTimeOptions.map(i => ({ value: i[0], label: i[0] }));
  }

  get balanceEnough() {
    if (!this.user.balance) return false;
    return this.user.balance > 0;
  }
  get useBalance() {
    if (!this.balanceEnough) return false;
    return this.submit.useBalance == "useBalance";
  }

  @Watch("projects")
  @Watch("date.selected.result")
  @Watch("form", { deep: true })
  onLoadPrice() {
    this.getPrice({ force: true });
  }

  async mounted() {
    if (process.env.NODE_ENV == "development") {
      await authStore.wechatLogin();
      await storeStore.loadStore();
    }
    this.getPrice();
    this.initData();
  }

  initData() {
    if (!this.form.checkIn && this.checkInTimeOptions.length > 0) {
      this.form.checkIn = this.checkInTimeOptions[0].value;
    }
  }

  radioChange() {
    this.submit.useBalance = this.submit.useBalance === "useBalance" ? "" : "useBalance";
  }

  async createBooking() {
    if (!this.payable) {
      return uni.showToast({
        title: "请先选择项目",
        icon: "none"
      });
    }
    const date = this.date.selected.result;
    const { checkIn: checkInAt } = this.form;
    const { id: store } = this.curStore;
    const projects = this.projects;
    await bookingStore.createBooking({ store, date, checkInAt, projects, useBalance: this.useBalance });
  }

  price = 0;
  loadingPrice = false;
  async getPrice({ force = false } = {}) {
    if (!force) {
      if (this.loadingPrice) return;
    }
    this.loadingPrice = true;
    const date = this.date.selected.result;
    const { checkIn: checkInAt } = this.form;
    const { id: store } = this.curStore;
    const projects = this.projects;
    try {
      const res = await api.getBookingPrice({ store, date, checkInAt, projects });
      if (res.data) {
        this.price = res.data.price;
      }
      this.loadingPrice = false;
    } catch (error) {
      this.loadingPrice = false;
    }
  }
}
</script>

<style lang="stylus" scoped>
.car
  padding 120upx 0
  position relative
  .icon-user
    width 76upx
    height 66upx
    position absolute
    right 61upx
    top 65upx
  .mode-list
    margin 40upx 0
    display flex
    flex-direction column
    align-items center
    .list-item
      padding-bottom 20upx
  .form
    .form-item
      margin 18upx 0
  .price-bar
    display flex
    justify-content flex-end
    padding-right 60upx
    margin 80upx 0
</style>
