<template>
    <div id="navbar">
        <div class="login" v-if="!AUTHENTICATED">
            <router-link :to="{name : 'login'}" > login </router-link>
        </div>
        
        <div class="user-info" v-if="AUTHENTICATED">
            
            <div class="left-panel">
                <div class="logout">
                    <button @click="logout" >Logout</button>
                </div>
                <div class="profile-img">
                    <img :src="USER.photoUrl" alt="">
                </div>
                
                <div class="username"> sajad564 </div>
            </div>
            
            <div class="right-panel">
                <div class="profile" >
                    <router-link :to="{name : 'profile'}" > profile </router-link>
                </div>    
            </div>
            
        </div>
    </div>
</template>
<script>
import {mapGetters , mapActions} from 'vuex'
export default {
    name : 'navbar' , 
    data() {
        return {

        }
    } , 
    computed : {
        ...mapGetters({
         AUTHENTICATED :   'auth/AUTHENTICATED' , 
            USER  :'auth/USER' , 
        })
    } , 
    methods : {
        ...mapActions({
            'clearAuth' : 'auth/logout'
        }) ,
         logout() {
              this.clearAuth().then(() => {
                 this.$router.push({name : 'login'})
             })
             
        }
    }  
}
</script>
<style scoped>
* {
    font-size: 20px;
    color : var(--darkgreen)
}
img {
    height : 50px ;
    width : 70px ;
    border-radius : 50% ;
}
    #navbar {
        box-sizing: border-box ;
        padding : 0 10px;
        background-color : white ;
        height : 50px ;
        margin-top : 20px ;
    }
    .login {
        margin-right : 0 ;
        margin-left : auto ;
        width : 100px ;
    }
    .logout {
        margin-right : 50px;
    }
    .user-info {
        display : grid ;
        grid-template-columns: repeat(2,200px);
        justify-content: space-between;
        align-items: center;
        
    }
    .left-panel {
        align-items: center;
        grid-gap : 10px ;
        display : grid ;
        grid-template-columns : repeat(3,1fr) ;
    }
    button {
        background-color : white  ;
    }
    
</style>