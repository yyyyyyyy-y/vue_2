export const vueRoutes = {
    path: "/vue",
    name: "vue",
    component: () => import("@/views/layout/layout"),
    children: [
        {
            path: "class-and-style",
            name: "class-and-style",
            component: () => import("@/views/vue/class-and-style/class-and-style"),
            meta: {
                title: "class-and-style — vue.js"
            }
        },
        {
            path: "draggable",
            name: "draggable",
            component: () => import("@/views/vue/draggable"),
            meta: {
                title: "draggable — vue.js"
            }
        },
        {
            path: "swiper",
            name: "swiper",
            component: () => import("@/views/vue/swiper"),
            meta: {
                title: "swiper — vue.js"
            }
        }
    ]
}

export default {
    vueRoutes
}