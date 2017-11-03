import Home from './components/home/Index.vue';
import NotFound from './components/errors/NotFound.vue';


const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    { path: '*', component: NotFound, meta: { title: 'Not Found' } },
];
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);


var router = new VueRouter({
    routes
});
export default router;