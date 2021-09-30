export const elementRoutes = {
    path: "/element",
    component: () => import("@/views/element/element"),
    children: [
        {
            path: "nav-menu",
            name: "element-nav-menu",
            component: () => import("@/views/element/nav-menu/nav-menu"),
            meta: {title: "element-nav-menu"}
        },
        {
            path: "tree",
            name: "element-tree",
            component: () => import("@/views/element/tree/tree"),
            meta: {title: "element-tree"}
        },
        {
            path: "table",
            name: "element-table",
            component: () => import ("@/views/element/table/table"),
            meta: {title: "element-table"}
        },
        {
            path: "vxe-table",
            name: "element-vxe-table",
            component: () => import ("@/views/element/table/vxe-table"),
            meta: {title: "element-vxe-table"}
        }
    ]
}

export default {
    elementRoutes
}