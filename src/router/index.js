import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Login from  '../views/Login'
import Profile from '../views/Profile'
Vue.use(VueRouter)

const routes = [
  {
    name : 'login' , 
    component : Login , 
    path : '/login' ,
    beforeEnter: (to, from, next) => {
      if(store.getters['auth/AUTHENTICATED']) {
        next('/profile')
      }
      else {
        next() ;
      }
    }
  } ,
  {
    name : 'profile' , 
    component : Profile , 
    path : '/profile' 
    
  }
]

const router = new VueRouter({
  routes
})

export default router
