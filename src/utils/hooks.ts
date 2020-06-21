import { authStore } from "../store/auth";
import { event } from "./event";

export const checkLogin = () =>
  new Promise((res, rej) => {
    if (!authStore.user.name) {
      event.once("login", () => {
        res();
      });
      authStore.showLogin = true;
    } else {
      res();
    }
  });

export const checkMobile = () =>
  new Promise((res, rej) => {
    if (!authStore.user.mobile) {
      event.once("mobile", () => {
        res();
      });
      authStore.showGetMobile = true;
    } else {
      res();
    }
  });
