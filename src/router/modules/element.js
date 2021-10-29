export const elementRoutes = {
    path: "/element",
    name: "element",
    component: () => import("@/views/layout/layout"),
    children: [
        {
            path: "nav-menu",
            name: "nav-menu",
            component: () => import("@/views/element/nav-menu/nav-menu"),
            meta: {title: "nav-menu — elementUi"}
        },
        {
            path: "tree",
            name: "tree",
            component: () => import("@/views/element/tree/tree"),
            meta: {title: "tree — elementUi"}
        },
        {
            path: "table",
            name: "table",
            component: () => import ("@/views/element/table/table"),
            meta: {title: "table — elementUi"}
        },
        {
            path: "upload",
            name: "upload",
            component: () => import ("@/views/element/upload/upload"),
            meta: {title: "upload — elementUi"}
        },
        /*{
            path: "vxe-table",
            name: "vxe-table",
            component: () => import ("@/views/element/table/vxe-table"),
            meta: {title: "element-vxe-table"}
        }*/
    ]
}

export default {
    elementRoutes
}