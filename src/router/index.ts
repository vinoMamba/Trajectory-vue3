import {createRouter, createWebHashHistory} from "vue-router";
import {App} from "vue";
import RouterMap from "./routes";

const router = createRouter({
    history: createWebHashHistory(),
    routes: RouterMap,
    strict: true,
    scrollBehavior: () => ({left: 0, right: 0})
});

export function setupRouter(app: App<Element>) {
    app.use(router);
}
