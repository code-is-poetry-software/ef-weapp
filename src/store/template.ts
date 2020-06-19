import store from "./";
import { VuexModule, Module } from "vuex-class-modules";

@Module({ generateMutationSetters: true })
class TemplateStore extends VuexModule {
  title = "Hello World!";
}

export const templateStore = new TemplateStore({ store, name: "auth" });
