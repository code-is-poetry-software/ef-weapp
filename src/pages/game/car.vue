<template>
  <view class="car">
    <view>
      <view style="margin-top:120upx;">
        <button-title text="选择模式" />
      </view>
      <view>
        <img class="icon-user" src="/static/image/icon-user.png" mode="widthFix" />
      </view>

      <view class="mode-list">
        <view v-for="item in mode.modes" :key="item.label" class="list-item">
          <button-mode :text="item.label" />
        </view>
      </view>
    </view>

    <u-form :model="form" ref="uForm" class="form">
      <view class="u-flex u-flex-row form-item" @click="date.show = true">
        <button-title text="选择日期" />
        <view>
          <span>{{ date.selected.year }}</span>
          <span>年</span>
          <span>{{ date.selected.month }}</span>
          <span>月</span>
          <span>{{ date.selected.day }}</span>
          <span>日</span>
        </view>
        <u-calendar v-model="date.show" mode="date" @change="e => (date.selected = e)"></u-calendar>
      </view>
      <view class="u-flex u-flex-row form-item" @click="quantity.show = true">
        <button-title text="选择数量" />
        <view>{{ form.quantity }}</view>
        <u-select mode="single-column" v-model="quantity.show" :list="quantity.list" @confirm="e => (form.quantity = e[0].value)"></u-select>
      </view>
      <view class="u-flex u-flex-row form-item" @click="slot.show = true">
        <button-title text="选择场次" />
        <view>{{ form.slot }}</view>
        <u-select mode="single-column" v-model="slot.show" :list="slot.list" @confirm="e => (form.slot = e[0].value)"></u-select>
      </view>
      <view class="price-bar">
        <button-price :text="price" />
      </view>

      <view class="column-center">
        <button-pay @click="createBooking" text="立即支付" />
        <view style="margin-top:20upx">
          <u-radio-group :value="submit.useBalance">
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

@Component
export default class Car extends Vue {
  form = {
    quantity: 6,
    slot: "10:00-11:00"
  };
  date = {
    show: false,
    selected: {
      day: _moment().day(),
      month: _moment().month(),
      result: _moment().format("YYYY-MM-DD"),
      year: _moment().year()
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
  .icon-user
    width 41px
    height 36px
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
