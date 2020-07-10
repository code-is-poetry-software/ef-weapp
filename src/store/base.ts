import store from "./";
import { VuexModule, Module, Action } from "vuex-class-modules";
import * as api from "../../common/vmeitime-http";

@Module({ generateMutationSetters: true })
class BaseStore extends VuexModule {
  configs = {};

  @Action
  async loadConfig() {
    const configs = await api.getConfigs();
    this.configs = configs;
  }
}

export const baseStore = new BaseStore({ store, name: "base" });
