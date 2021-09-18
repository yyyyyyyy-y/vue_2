export const elementRoutes = {
    path: "/element",
    component: () => import("@/views/element/element"),
    children: [
        {
            path: "tree",
            name: "elemen-tree",
            component: () => import("@/views/element/tree/tree"),
            meta: {title: "element-tree"}
        },
        {
            path: "table",
            name: "element-table",
            component: () => import ("@/views/element/table/table"),
            meta: {title: "element-table"}
        }
    ]
}

export default {
    elementRoutes
}