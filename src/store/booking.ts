import store from "./";
import { VuexModule, Module, Action } from "vuex-class-modules";
import * as api from "../../common/vmeitime-http";
import { Booking } from "../type";
import { authStore } from "./auth";
import { _ } from "../utils/lodash";

@Module({ generateMutationSetters: true })
class BookingStore extends VuexModule {
  userBookings: Array<Booking> = [];

  @Action
  async loadUserBooking() {
    const res = await api.getList({ type: "booking", data: { limit: 10, skip: 0, status: "booked" } });
    if (res.data) {
      this.userBookings = res.data;
    }
  }

  @Action
  async createBooking(data: Parameters<typeof api.createBooking>[0]) {
    const res = await api.createBooking(data);
    const payArgs = _.get(res, "data.payments.0.payArgs");
    if (payArgs) {
      await this.handlePayment(payArgs);
    }
    if (res.data.id) {
      uni.navigateTo({ url: `/pages/booking/detail?id=${res.data.id}` });
    }
  }

  handlePayment(paymentData) {
    return new Promise((resolve, reject) => {
      uni.showLoading();
      uni.requestPayment({
        signType: "MD5",
        ...paymentData,
        success: res => {
          console.log(res);
          resolve({ ...res, ...paymentData });
        },
        fail: res => {
          console.log(res);
          reject(res);
        },
        complete() {
          uni.hideLoading();
        }
      });
    });
  }
}

export const bookingStore = new BookingStore({ store, name: "booking" });
