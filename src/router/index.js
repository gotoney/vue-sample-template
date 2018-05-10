/**
 * Created by toney on 2018/5/9.
 */
import VueRouter from "vue-router"
const HelloComponent = () => import(/* webpackChunkName: "hello" */ '@/components/hello/index.vue')

export default new VueRouter({
    routes: [
        { path: '', redirect: '/hello' },
        { path: '/hello', component: HelloComponent }
    ]
})

