import store from "./";
import { VuexModule, Module, Action } from "vuex-class-modules";

@Module({ generateMutationSetters: true })
class BookingStore extends VuexModule {
  @Action
  createBooking() {
    uni.navigateTo({ url: "/pages/booking/detail" });
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
