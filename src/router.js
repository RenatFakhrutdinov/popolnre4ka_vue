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
            path: "/mts",
            component: PayPage,
            props: {
                operatorLabel: "МТС",
                pictPath: "mts.png"
            }
        },
        {
            path: "/megafon",
            component: PayPage,
            props: {
                operatorLabel: "МегаФон",
                pictPath: "megafon.png"
            }
        },
        {
            path: "/beeline",
            component: PayPage,
            props: {
                operatorLabel: "Билайн",
                pictPath: "beeline.png"
            }
        },
        {
            path: "/tele2",
            component: PayPage,
            props: {
                operatorLabel: "Tele2",
                pictPath: "tele2.png"
            }
        },
        {
            path: "/yota",
            component: PayPage,
            props: {
                operatorLabel: "Yota",
                pictPath: "yota.png"
            }
        },
        {
            path: "/rostelecom",
            component: PayPage,
            props: {
                operatorLabel: "Ростелеком",
                pictPath: "rostelecom.png"
            }
        },
        {
            path: "/tinkoff",
            component: PayPage,
            props: {
                operatorLabel: "Тинькофф Мобайл",
                pictPath: "tinkoff.png"
            }
        },
        {
            path: "/sber",
            component: PayPage,
            props: {
                operatorLabel: "СберМобайл",
                pictPath: "sberbank.png"
            }
        },
    ]
})