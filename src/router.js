import { createRouter, createWebHistory} from "vue-router"

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:"/",
            name: "Home",
            component: () => import("./pages/Home.vue"),
        },
        {
            path:"/:pathMatc(.*)*",
            name: "NotFound",
            component: () => import("./pages/NotFound.vue"),
        },
    ]
})


export default router;