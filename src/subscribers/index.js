import store from '../store'
import axios from 'axios'

store.subscribe((mutations) => {
    if(mutations.type=="auth/UPDATE_TOKEN")
    {
        localStorage.setItem('access_token' , mutations.payload.access) ;
        localStorage.setItem('refresh_token' , mutations.payload.refresh);
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');
    }
    if(mutations.type=='auth/REMOVE_TOKEN'){
        localStorage.removeItem('access_token') ; 
        localStorage.removeItem('refresh_token') ; 
        axios.defaults.headers.common['Authorization'] = null ; 
    }
})