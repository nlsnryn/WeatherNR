import { createApp } from "vue";
import "./assets/css/main.css";
import App from "./App.vue";
import router from "./route/index";

createApp(App).use(router).mount("#app");
