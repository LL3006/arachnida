import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

import "./assets/main.css";

/* FontAwesome */
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

createApp(App);

const app = createApp(App).component("font-awesome-icon", FontAwesomeIcon);

app.use(createPinia());

app.mount("#app");
