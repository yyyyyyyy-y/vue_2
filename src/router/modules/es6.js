export const es6Routes = {
    path: "/es6",
    name: "es6",
    component: () => import("@/views/layout/layout"),
    children: [
        {
            path: "promise",
            name: "promise",
            component: () => import("@/views/es6/promise/promise"),
            meta: {
                title: "promise — es6"
            }
        }
    ]
}

export default {
    es6Routes
}