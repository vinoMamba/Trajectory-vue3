import {RouteRecordRaw} from "vue-router";

const RootRouter: RouteRecordRaw = {
    path: "/",
    name: "Root",
    redirect: "/home"
};
const HomeRouter: RouteRecordRaw = {
    path: "/home",
    name: "Home",
    component: () => import("/src/views/Home.vue")
};
const basicRoutes = [RootRouter, HomeRouter];

const Statistics: RouteRecordRaw = {
    path: "/statistics",
    name: "Statistics",
    component: () => import("/@/views/Statistics.vue")
};
const TagList: RouteRecordRaw = {
    path: "/tagList",
    name: "TagList",
    component: () => import("/@/views/TagList.vue")
};

const Money: RouteRecordRaw = {
    path: "/money",
    name: "Money",
    component: () => import("/@/views/Money.vue")
};
const RouterMap: RouteRecordRaw[] = [
    ...basicRoutes,
    Statistics,
    TagList,
    Money
];

export default RouterMap;
