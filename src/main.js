import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import 'vue-material-design-icons/styles.css';

import App from '@/App.vue'
import router from '@/router/router'
import i18n from './i18n'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    let language = to.params.lang;

    if(!language) {
        language = 'en'
    }

    i18n.locale = language
    next()
})

new Vue({
    el: "#app",
    router,
    template: '<App />',
    i18n,
    render: h => h(App)
})