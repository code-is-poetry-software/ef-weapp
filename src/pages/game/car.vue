<template>
  <view class="car page">
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
          <img :style="[{ width: item.size ? '160rpx' : '120rpx', height: '120rpx', marginRight: item.size ? '10rpx' : '40rpx' }]" :src="item.image" mode="widthFix" />
          <button-mode :text="item.label" :amount.sync="item.amount" />
        </view>
      </view>
    </view>

    <u-form :model="form" ref="uForm" class="form">
      <view class="u-flex u-flex-row form-item" @click="date.show = true">
        <button-title text="选择日期" />
        <view style="margin: 20upx 0 0 20upx;">
          <span class="with-border" style="margin-right:12upx">{{ date.selected.year }}</span>
          <span class="with-border" style="margin-right:12upx">{{ date.selected.month }}</span>
          <span class="with-border">{{ date.selected.day }}</span>
        </view>
        <u-calendar
          v-model="date.show"
          mode="date"
          :max-date="maxDate"
          :min-date="today"
          :change-year="false"
          @change="e => (date.selected = e)"
        ></u-calendar>
      </view>
      <view class="u-flex u-flex-row form-item" @click="checkIn.show = true">
        <button-title text="选择时段" />
        <view class="with-border" style="margin: 20upx 0 0 20upx;">{{ checkIn.label }}</view>
        <u-select
          mode="single-column"
          v-model="checkIn.show"
          :list="checkInTimeOptions"
          @confirm="
            e => {
              form.checkInAt = e[0].value;
              checkIn.label = e[0].label;
            }
          "
        ></u-select>
      </view>
      <view class="price-bar">
        <button-price :text="price" :text-origin="priceOrigin" />
      </view>

      <view class="column-center">
        <button-pay @click="createBooking" text="立即支付" :disabled="!payable" />
        <view style="margin-top: 20upx;">
          <u-radio-group :value="submit.useBalance" v-if="balanceEnough">
            <u-radio name="useBalance" @change="radioChange">使用余额支付</u-radio>
          </u-radio-group>
        </view>
        <view v-if="curStore.disableClientBooking">暂未开放客户端预约</view>
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
const now = _moment();

@Component
export default class Car extends Vue {
  today = this.moment().format("YYYY-MM-DD");
  maxDate = this.moment().add(10, "days").format("YYYY-MM-DD");
  form: { checkInAt: string | null } = {
    checkInAt: ""
  };
  date = {
    show: false,
    selected: {
      day: now.dates(),
      month: now.month() + 1,
      result: now.format("YYYY-MM-DD"),
      year: now.year()
    }
  };
  checkIn = {
    show: false,
    label: ""
  };
  checkInTimeOptions: { value: string; label: string }[] = [];
  submit = {
    useBalance: "useBalance"
  };

  mode = {
    modes: [
      { label: "电动入门赛车", amount: "0", image: "/static/image/icon-car1.png" },
      { label: "电动BOOST赛车", amount: "0", image: "/static/image/icon-car2.png" }
      // { label: "动力方程超级赛道", amount: "0", image: "/static/image/icon-car3.png", size: "large" }
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
    return this.projects.some(i => i.count > 0) && this.form.checkInAt && !this.curStore.disableClientBooking;
  }

  @Watch("projects")
  @Watch("date.selected.result")
  @Watch("form", { deep: true })
  onLoadPrice() {
    this.getPrice({ force: true });
  }

  @Watch("date.selected.result", { immediate: true }) async onLoadCheckInTimeOptions(date) {
    const { data } = await api.getStoreCheckInTimeOptions({ storeId: this.curStore.id, date });
    this.checkInTimeOptions = data;
    this.setCheckInAt();
  }

  async mounted() {
    if (process.env.NODE_ENV == "development") {
      await authStore.wechatLogin();
      await storeStore.loadStore();
    }
    this.getPrice();
  }

  setCheckInAt() {
    if (!this.form.checkInAt && this.checkInTimeOptions.length > 0) {
      this.form.checkInAt = this.checkInTimeOptions[0].value;
      this.checkIn.label = this.checkInTimeOptions[0].label;
    }
  }

  radioChange() {
    this.submit.useBalance = this.submit.useBalance === "useBalance" ? "" : "useBalance";
  }

  get balanceEnough() {
    if (!this.user.balance) return false;
    return this.user.balance > 0;
  }
  get useBalance() {
    if (!this.balanceEnough) return false;
    return this.submit.useBalance == "useBalance";
  }

  async createBooking() {
    const date = this.date.selected.result;
    const { checkInAt } = this.form;
    const { id: store } = this.curStore;
    const projects = this.projects;
    await bookingStore.createBooking({ store, date, checkInAt, projects, useBalance: this.useBalance });
  }

  price = 0;
  priceOrigin = null;
  loadingPrice = false;
  async getPrice({ force = false } = {}) {
    if (!force) {
      if (this.loadingPrice) return;
    }
    this.loadingPrice = true;
    const date = this.date.selected.result;
    const { checkInAt } = this.form;
    const { id: store } = this.curStore;
    const projects = this.projects;
    try {
      const res = await api.getBookingPrice({ store, date, checkInAt, projects });
      if (res.data) {
        this.price = res.data.price;
        this.priceOrigin = res.data.priceOrigin;
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
      /deep/ .button-mode
        .text
          left 80upx
  .form
    .form-item
      margin 18upx 0
  .price-bar
    display flex
    justify-content flex-end
    padding-right 60upx
    margin 80upx 0
</style>
