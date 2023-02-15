import { createApp } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from "./App.vue";
import router from "./router.js";

import store from "./stores/index.js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "normalize.css";
import StatisticCard from "./components/UI/StatisticCard.vue";
import BaseCard from "./components/UI/BaseCard.vue";
import BaseButton from "./components/UI/BaseButton.vue";
import PrintButton from "./components/UI/printButton.vue";
import BaseSpinner from "./components/UI/BaseSpinner.vue";
import ErrorModal from "./components/UI/ErrorModal.vue";
import NavBar from "./components/Nav/NavBar.vue";

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
library.add(fas);
app.use(router);

app.use(store);
app.component("statistic-card", StatisticCard);
app.component("base-card", BaseCard);
app.component("base-button", BaseButton);
app.component("base-spinner", BaseSpinner);
app.component("error-modal", ErrorModal);
app.component("nav-bar", NavBar);
app.component("print-button", PrintButton);
app.mount("#app");
