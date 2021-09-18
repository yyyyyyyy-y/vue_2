import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import layout from "@/views/layout/layout"

import {elementRoutes} from "./modules/element"
import {es6Routes} from "./modules/es6";

const publicRoutes = [
    /*  {
        path: '/',
        component : () => import('@/views/login/login'),
      },*/
    {
        path: "/",
        component: layout,
        redirect: "/home",
        children: [
            {path: "/home", name: "home", component: () => import("@/views/home/home"), meta: {title: "首页"}},
        ]
    },

    elementRoutes,
    es6Routes,

    //404页面必须放在最底部
    {path: '*', component: () => import("@/views/error-page/page404"), hidden: true}
]

const router = new VueRouter({
    routes: publicRoutes
})

export default router
