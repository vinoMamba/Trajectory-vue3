import {createRouter, createWebHashHistory} from "vue-router";
import {App} from "vue";
import {basicRoutes} from "./routes";

const router = createRouter({
    history: createWebHashHistory(),
    routes: basicRoutes,
    strict: true,
    scrollBehavior: () => ({left: 0, right: 0})
});

export function setupRouter(app: App<Element>) {
    app.use(router);
}
