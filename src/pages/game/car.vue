<template>
  <view class="car">
    <view>
      <text>选择模式</text>
      <view class="mode-list">
        <view v-for="item in mode.modes" :key="item.label">{{ item.label }}</view>
      </view>
    </view>

    <u-form :model="form" ref="uForm">
      <view class="u-flex u-flex-row" @click="date.show = true">
        <view>选择日期</view>
        <view>{{ date.selected.result }}</view>
        <u-calendar v-model="date.show" mode="date" @change="e => (date.selected = e)"></u-calendar>
      </view>
      <view class="u-flex u-flex-row" @click="quantity.show = true">
        <view>选择数量</view>
        <view>{{ form.quantity }}</view>
        <u-select mode="single-column" v-model="quantity.show" :list="quantity.list" @confirm="e => (form.quantity = e[0].value)"></u-select>
      </view>
      <view class="u-flex u-flex-row"  @click="slot.show = true">
        <view>选择场次</view>
        <view>{{ form.slot }}</view>
        <u-select mode="single-column" v-model="slot.show" :list="slot.list" @confirm="e => (form.slot = e[0].value)"></u-select>
      </view>
      <view> 共计: {{ price }} </view>

      <view>
        <button @click="createBooking">立即支付</button>
        <u-radio-group :value="submit.useBalance">
          <u-radio name="useBalance" @change="radioChange">使用余额支付</u-radio>
        </u-radio-group>
      </view>
    </u-form>
  </view>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import _moment from "moment";
import { bookingStore } from "../../store/booking";

@Component
export default class Car extends Vue {
  form = {
    quantity: 6,
    slot: "10:00-11:00"
  };
  date = {
    show: false,
    selected: {
      day: 0,
      month: 0,
      result: _moment().format("YYYY-MM-DD"),
      year: 0
    }
  };
  quantity = {
    show: false,
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => ({ value: i, label: i }))
  };
  slot = {
    show: false,
    list: [10, 11, 12, 13, 14, 15, 16, 17].map(i => ({ value: `${i}:00-${i + 1}:00`, label: `${i}:00-${i + 1}:00` }))
  };
  submit = {
    useBalance: "useBalance"
  };

  mode = {
    modes: [{ label: "动力方程小赛道" }, { label: "动力方程大赛道" }, { label: "动力方程超级赛道" }]
  };

  get price() {
    return 200;
  }

  radioChange() {
    this.submit.useBalance = this.submit.useBalance === "useBalance" ? "" : "useBalance";
  }

  async createBooking() {
    bookingStore.createBooking();
  }
}
</script>

<style lang="stylus" scoped>
.car
  .mode-list
    display flex
    flex-direction column
</style>
