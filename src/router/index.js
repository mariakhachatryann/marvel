import { createRouter, createWebHashHistory } from 'vue-router';
import TheCharacters from "@/views/TheCharacters";
import TheComics from "@/views/TheComics";
import TheMain from "@/views/TheMain"

const routes = [
    {
        path: "/",
        component: TheMain
    },
    {
        path: "/characters",
        component: TheCharacters
    },
    {
        path: "/comics",
        component: TheComics
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
