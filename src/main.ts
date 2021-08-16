import {createApp} from "vue";
import App from "./App.vue";
import {setupRouter} from "./router";
import "/@/assets/index.scss";

function bootstrap() {
    const app = createApp(App);
    setupRouter(app);
    app.mount("#app", true);
}

bootstrap();
