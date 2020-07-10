import { Helper } from "./helper";
import { event } from "./event";
import { Hooks } from "./hooks";
import { moment } from "./moment";

export const utils = {
  helper: new Helper(),
  hooks: new Hooks(),
  event,
  moment
};
