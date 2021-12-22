import { createApp } from "vue";
import App from "./pages/app.vue";
import { store } from "./store";

import "@/assets/styles/common.scss";

const app = createApp(App);
app.use(store);
app.mount("#app");
