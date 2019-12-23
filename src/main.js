import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from '@/App.vue'
import router from '@/router/router'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
	el: "#app",
	router,
	template: '<App />',
	render: h => h(App)
})
