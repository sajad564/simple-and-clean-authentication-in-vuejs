import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from  '../views/Login'
Vue.use(VueRouter)

const routes = [
  {
    name : 'login' , 
    component : Login , 
    path : '/login'
  }
]

const router = new VueRouter({
  routes
})

export default router
