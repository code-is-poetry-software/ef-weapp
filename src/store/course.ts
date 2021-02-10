import store from ".";
import { VuexModule, Module, Action } from "vuex-class-modules";
import * as api from "../../common/vmeitime-http";
import { Course } from "../type";
import { _ } from "../utils/lodash";
import { authStore } from "./auth";
import { bookingStore } from "./booking";

@Module({ generateMutationSetters: true })
class CourseStore extends VuexModule {
  userCourses: Array<Course> = [];

  @Action
  async loadUserCourse() {
    const res = await api.getList({ type: "course", data: { player: authStore.user.id, status: "checking,waiting,started" } });
    if (res.data) {
      this.userCourses = res.data;
    }
  }
}

export const courseStore = new CourseStore({ store, name: "course" });
