import {createApp} from "vue";
import App from "./App.vue";
import {setupRouter} from "./router";
import "/@/assets/index.scss";
import "/@/assets/main.scss";
import SvgIcon from "./components/SvgIcon.vue";
import {setupStore} from "./store";

function bootstrap() {
    const app = createApp(App);
    setupRouter(app);
    setupStore(app);
    app.component("svg-icon", SvgIcon);
    app.mount("#app", true);
}

bootstrap();
