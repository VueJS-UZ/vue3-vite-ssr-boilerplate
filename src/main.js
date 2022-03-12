import { createSSRApp } from "vue";
import { createPinia } from "pinia";
import { createRouter } from "./router";
import { createHead } from "@vueuse/head";
import "@unocss/reset/tailwind.css";
import "uno.css";

import App from "./App.vue";

export function createApp() {
  const app = createSSRApp(App);

  const router = createRouter();
  const pinia = createPinia();
  const head = createHead();

  // Register plugins
  const plugins = import.meta.globEager("./plugins/*.js");

  for (const path in plugins) {
    plugins[path].default({ app, router, pinia, head });
  }

  app.use(pinia);
  app.use(router);
  app.use(head);

  app.provide("pinia", pinia);

  return { app, router, pinia, head };
}
