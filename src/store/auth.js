import axios from 'axios'
import localStore from '../services/localStore';
const state = {
    user : '' , 
    accessToken : null ,
    refreshToken : null ,  
}
const actions = {
    
    async Login({commit}  , logindata) {
        return await axios.post('account/login' ,logindata)
            .then(resp => {
                
                let tokenInfo = {
                access : resp.data.item.accessToken ,
                refresh : resp.data.item.refreshToken
                }
                commit('UPDATE_TOKEN' , {tokenInfo , setToLocal : true}) ; 
            })
    } , 
     logout({commit}) {
        return new Promise((resolve) => {
            commit('REMOVE_TOKEN') ;
            commit('REMOVE_USER') ; 
            resolve(); 
        })
        
     },
    async Profile({commit}){
        return await axios.get('account/currentuser')
            .then(resp => {
                let currentUserData = {
                    username : resp.data.item.username ,
                    photoUrl : resp.data.item.photo.url
                }
                commit('SET_USER' , currentUserData) ; 
            })
    }  , 
 async RefreshToken({commit , state} ) {
     return await axios.post("account/refreshtoken" , {
        'accessToken' : state.accessToken , 
        'refreshToken' : state.refreshToken
    })
    .then(resp => {
        let tokenInfo = {
            access : resp.data.item.accessToken ,
            refresh : resp.data.item.refreshToken
        }
        commit('UPDATE_TOKEN',{tokenInfo , setToLocal : true}) ; 
    })
 }
}
const mutations = {
    SET_USER(state ,user) {
        state.user = user
    } ,
    REMOVE_USER(state) {
        state.user = null ;
    }  ,
    REMOVE_TOKEN(state){
        state.accessToken=null ;
        state.refreshToken = null ;
          
        localStore.removeTokens() ; 
    } , 
    UPDATE_TOKEN(state , {tokenInfo , setToLocal}){
        localStore.setTokens(tokenInfo , setToLocal) ;
        state.accessToken = tokenInfo.access ;
        state.refreshToken = tokenInfo.refresh ;
    }
}
const getters = {
    USER(state) {
        return state.user
    } , 
    TOKEN(state) {
        return state.accessToken ; 
    },
    AUTHENTICATED(state) {
        return state.accessToken!=null ; 
    }
}
export default {
    namespaced : true ,
    getters ,
    mutations ,
    actions ,
    state
}
