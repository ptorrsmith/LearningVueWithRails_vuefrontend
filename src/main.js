import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";

// console.log('about to create');

createApp(App)
  .use(store)
  .mount("#app");
