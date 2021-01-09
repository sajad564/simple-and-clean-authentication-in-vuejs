import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
let tokenInfo = {
  access : localStorage.getItem('access_token')  , 
  refresh : localStorage.getItem('refresh_token')
}
store.commit("auth/UPDATE_TOKEN" , tokenInfo)
require('./subscribers')
require('./interceptors') 
window.axios = axios
axios.defaults.baseURL = "http://localhost:5000/api/"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
