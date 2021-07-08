import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

const publicRoutes = [
    {
        path:'/login',
        name:'login',
        // component:()=> import('@/views/login/index')
    }
]

const router = new VueRouter({
    routes : publicRoutes
})

export default router