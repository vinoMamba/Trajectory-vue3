import {createApp} from "vue";
import App from "./App.vue";
import {setupRouter} from "./router";
import "/@/assets/index.scss";
import SvgIcon from "./components/SvgIcon.vue";

function bootstrap() {
    const app = createApp(App);
    setupRouter(app);
    app.component('svg-icon', SvgIcon);
    app.mount("#app", true);
}

bootstrap();
