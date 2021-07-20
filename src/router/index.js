import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import layout from '@/views/layout'
const publicRoutes = [
  {
    path: '/',
    component: layout,
  },
  {
    path: '/login',
    name: 'login',
    component : () => import('../views/login/index'),
  },

    //404页面必须放在最底部
  {
    path: '*',
    component: ()=>import('@/views/error-page/page404'),
    hidden: true
  }
]

const router = new VueRouter({
  routes: publicRoutes
})

export default router
