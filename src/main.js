import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index"

import BaseButton from "@/components/ui/BaseButton";
import BaseSpinner from "@/components/ui/BaseSpinner"
import MainBanner from "@/components/MainBanner"

const app = createApp(App)

app.component("base-button", BaseButton)
app.component("base-spinner", BaseSpinner)
app.component("main-banner", MainBanner)

app.use(router)
app.use(store)

app.mount("#app")
