import axios from 'axios'
import store from '../store'
function InitilizeAuth() {
    let tokenInfo = {
        access : localStorage.getItem('access_token')  , 
        refresh : localStorage.getItem('refresh_token')
      }
      SetBaseUrl()
      let setToLocal = false ; // no it should be already there
      store.commit("auth/UPDATE_TOKEN" ,{tokenInfo ,setToLocal } ) ;
      if(store.getters['auth/TOKEN']){
          store.dispatch('auth/Profile') ; 
      } 
}
function SetBaseUrl(){
    axios.defaults.baseURL = "http://localhost:5000/api/" ;
}
export default {
    InitilizeAuth , 
}