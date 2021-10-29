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
        }
    ]
}

export default {
    vueRoutes
}