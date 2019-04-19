import Vue from "vue";
import Router from "vue-router";
import Home from "../components/home.vue";
import Login from "../components/common/login.vue";


Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/home',
            component: Home,
            children: [
                // {
                //     path: '/home/..',
                //     component: subPage,
                // },
            ]
        },
        {
            path: '/',
            component: Login,
        },
    ]
});