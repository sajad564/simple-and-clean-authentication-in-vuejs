import axios from 'axios'
const state = {
    accessToken : '' ,
    refreshToken : '' ,  
}
const actions = {
    async Login({commit}  , logindata) {
        console.log(logindata);
        return await axios.post('account/login' ,logindata)
            .then(resp => {
                
                let tokenInfo = {
                access : resp.data.item.accessToken ,
                refresh : resp.data.item.refreshToken
                }
                console.log(tokenInfo)
                commit('UPDATE_TOKEN' , tokenInfo) ; 
            })
    } , 
 async RefreshToken({commit} , state) {
     console.log('from refresh token action')
     await axios.post("account/refreshtoken" , {
        'accessToken' : state.accessToken , 
        'refreshToken' : state.refreshToken
    })
    .then(resp => {
        console.log(resp)
        let tokenInfo = {
            access : resp.data.item.accessToken ,
            refresh : resp.data.item.refreshToken
        }
        commit.UPDATE_TOKEN(tokenInfo) ; 
    })
 }
}
const mutations = {
    REMOVE_TOKEN(state){
        state.accessToken=null ;
        state.refreshToken = null ; 
    } , 
    UPDATE_TOKEN(state , tokeninfo){
        state.AccessToken = tokeninfo.access ;
        state.refreshToken = tokeninfo.refresh ;
    }
}
const getters = {

}
export default {
    namespaced : true ,
    getters ,
    mutations ,
    actions ,
    state
}
