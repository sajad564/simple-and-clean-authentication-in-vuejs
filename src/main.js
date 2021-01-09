import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './assets/css/style.css'
import initilizeService from './services/Initilize'
initilizeService.InitilizeAuth() ;
window.axios = axios
require('./interceptors') 


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
