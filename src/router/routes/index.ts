import {RouteRecordRaw} from "vue-router";

const RootRouter: RouteRecordRaw = {
    path: '/',
    name: 'Root',
    redirect: '/home'
};
const HomeRouter: RouteRecordRaw = {
    path: '/home',
    name: 'Home',
    component: () => import("/src/views/Home.vue")
};

export const basicRoutes = [RootRouter, HomeRouter];
