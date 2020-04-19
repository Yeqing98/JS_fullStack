import Vue from 'vue';
import VueRouter from 'vue-router';

import {
    login,
    index,
    register
} from 'pages/';
// this.$router   this.$route

const routes = [
    {
        path: '/',
        name: '登录',
        hidden: true,
        component: login
    },
    {
        path: '/index',
        name: 'index',
        hidden: true,
        component: index
    },
    {
        path: '/register',
        name: 'register',
        hidden: true,
        component: register
    }
]
Vue.use(VueRouter)

export default new VueRouter({
    routes,
    // strict: process.env.NODE_ENV !== 'production'
})