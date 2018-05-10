/**
 * Created by toney on 2018/5/3.
 */

import Vue from "vue"
import VueI18n from "vue-i18n"

import App from "App.vue"
import router from "router"
import "@/assets/css/style.css"


new Vue({
    el: '#app',
    VueI18n,
    router,
    template: '<App/>',
    components: {
        App
    },
    // render: h => h(App)
})
