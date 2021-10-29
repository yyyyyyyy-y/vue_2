import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import layout from "@/views/layout/layout";
import {elementRoutes} from "./modules/element"
import {es6Routes} from "./modules/es6";
import {vueRoutes} from "./modules/vue";

const publicRoutes = [
    {path: "/login", component: () => import('@/views/login/login'), name: "login", meta: {title: "login"}},
    {
        path: "/index",
        component: layout,
        redirect: "/home",
        children: [
            {path: "/home", name: "name", component: () => import("@/views/home/home"), meta: {title: "home"}},
        ]
    },
    elementRoutes,
    es6Routes,
    vueRoutes,

    //404页面必须放在最底部
    {path: '*', component: () => import("@/views/error-page/page404"), hidden: true, meta: {title: "404"}}
]

const router = new VueRouter({
    // base:"/src",
    mode: 'history',
    routes: publicRoutes
})

export default router
