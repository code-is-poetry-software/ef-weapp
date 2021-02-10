import store from "./";
import { VuexModule, Module, Action } from "vuex-class-modules";
import * as api from "../../common/vmeitime-http";
import { Store } from "../type";
import { bookingStore } from "./booking";
import { courseStore } from "./course";

@Module({ generateMutationSetters: true })
class StoreStore extends VuexModule {
  stores: Array<Store> = [];
  curStoreId = 0;
  projects: { [key: string]: Store["projects"][0] } = {};

  get curStore() {
    return this.stores[this.curStoreId];
  }

  @Action
  selectStore({ name }: { name: string }) {
    const curStoreId = this.stores.findIndex(i => i.name == name);
    this.curStoreId = curStoreId;
  }

  @Action
  async loadStore() {
    const res = await api.getList({ type: "store", data: { limit: 10, skip: 0, order: "name" } });
    this.stores = res.data;
    const projects = {};
    this.stores.forEach(i => {
      i.projects.forEach(project => {
        projects[project.name] = project;
      });
    });
    this.projects = { ...projects };
  }
}

export const storeStore = new StoreStore({ store, name: "store" });
