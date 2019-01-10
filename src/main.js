import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Vue from 'vue'

import App from './App.vue'
import './registerServiceWorker'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
