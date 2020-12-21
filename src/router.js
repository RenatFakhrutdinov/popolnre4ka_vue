import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import PayPage from "@/views/PayPage";

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: "/operator",
            component: PayPage,
            props: {
                testProp: "de"
            }
        },
    ]
})