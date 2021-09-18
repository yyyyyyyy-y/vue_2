export const es6Routes = {
    path: "/es6",
    component: () => import("@/views/es6/es6"),
    children: [
        {
            path: "promise",
            name: "es6-promise",
            component: () => import("@/views/es6/promise/promise"),
            meta: {
                title: "es6-promise"
            }
        }
    ]
}

export default {
    es6Routes
}