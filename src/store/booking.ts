import store from "./";
import { VuexModule, Module, Action } from "vuex-class-modules";

@Module({ generateMutationSetters: true })
class BookingStore extends VuexModule {
  @Action
  createBooking() {
    uni.navigateTo({ url: "/pages/payment/success" });
  }
}

export const bookingStore = new BookingStore({ store, name: "booking" });
