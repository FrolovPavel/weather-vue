import Vue from 'vue'
import VueRouter from 'vue-router'
import PageWeather from "../components/pages/PageWeather";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: PageWeather
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
