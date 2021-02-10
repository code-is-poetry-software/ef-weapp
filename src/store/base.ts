import store from "./";
import { VuexModule, Module, Action } from "vuex-class-modules";
import * as api from "../../common/vmeitime-http";
import { storeStore } from "./store";
import { bookingStore } from "./booking";
import { courseStore } from "./course";

@Module({ generateMutationSetters: true })
class BaseStore extends VuexModule {
  configs = {};
  pollingTimer = 0;

  get enablePollingStore() {
    return bookingStore.userBookings.length || courseStore.userCourses.length;
  }

  get enablePollingBooking() {
    return true;
  }

  get enablePollingCourse() {
    return bookingStore.userBookings.length;
  }

  @Action
  async loadConfig() {
    const configs = await api.getConfigs();
    this.configs = configs;
  }

  @Action
  polling() {
    if (this.pollingTimer) clearInterval(this.pollingTimer);
    this.pollingTimer = setInterval(async () => {
      if (this.enablePollingStore) {
        storeStore.loadStore();
      }
      if (this.enablePollingBooking) {
        bookingStore.loadUserBooking();
      }
      if (this.enablePollingCourse) {
        courseStore.loadUserCourse();
      }
    }, 3000);
  }

  stopPolling() {
    clearInterval(this.pollingTimer);
  }
}

export const baseStore = new BaseStore({ store, name: "base" });
