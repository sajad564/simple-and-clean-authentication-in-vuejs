import axios from "axios";


function setAxiosHeaders(accessToken) {
    
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken ; 
}
function removeAxiosHeaders() {
    axios.defaults.headers.common['Authorization'] = null ;
}
function setTokens(tokens , setLocal){
    if(setLocal){
    localStorage.setItem('access_token' , tokens.access) ; 
    localStorage.setItem('refresh_token' , tokens.refresh) ;
    }
    setAxiosHeaders(tokens.access)
}

function removeTokens() {
    localStorage.removeItem('access_token') ;
    localStorage.removeItem('refresh_token') ;
    removeAxiosHeaders() 
}
export default {
    setTokens , 
    removeTokens
}