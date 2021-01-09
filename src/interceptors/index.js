import axios from 'axios'
import router from '../router'
import store from '../store'
const  refreshTokenEndpoint = "account/refreshtoken"
axios.interceptors.response.use((response) => {
   
    return response
},  (error) => {
    const originalReq = error.config ;
    if(error.response.data.status==401 && originalReq.url==refreshTokenEndpoint) {
        store.dispatch('auth/logout')
            .then(() => {
                router.push({name : 'login'})
            })
        return Promise.reject(error)
    }
    if(error.response.status==401 && !originalReq.retry) {
        originalReq.retry = true
        return store.dispatch("auth/RefreshToken")
            .then(() => {
                    originalReq.headers['Authorization'] = 'Bearer ' + store.getters['auth/TOKEN'] ; 
                    return axios(originalReq) ; 
            })
            
    }
    return Promise.reject(error) ; 
})