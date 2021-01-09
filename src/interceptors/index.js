import axios from 'axios'
import router from '../router'
import store from '../store'
const  refreshTokenEndpoint = "http://localhost:5000/api/account/refreshtoken"
axios.interceptors.response.use((response) => {
    return response
},  (error) => {
    const originalReq = error.config ;
    if(error.response.status==401 && originalReq.url==refreshTokenEndpoint) {
        router.push({name : 'login'}) ; 
        return Promise.reject(error)
    }
    if(error.response.status==401) {
        return store.dispatch("RefreshToken")
            .catch(() => {
                store.commit('REMOVE_TOKEN') ; 
            })
    }
    return Promise.reject(error) ; 
})