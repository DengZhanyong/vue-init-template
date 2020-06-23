import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './components/component'
import './assets/css/public.{{cssPreType}}'
import './assets/css/config.{{cssPreType}}'

import api from './api/index'
import utils from './assets/utils/index'

Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.prototype.$utils = utils

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
