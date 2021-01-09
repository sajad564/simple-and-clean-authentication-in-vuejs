<template>
<div id="login">
    <section class="form-container">
        <form @submit.prevent='login'>
            <div class="input-container">
                <input type="text" v-model="loginData.username" name="username" id="username" placeholder="username">
            </div>
            <div class="input-container">
                <input type="text" v-model="loginData.password" name="password" id="password"  placeholder="password" >
            </div>
            <button type="submit" id="login-btn" :disabled='!validate'>login</button>
        </form>
    </section>
</div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    name : 'login' , 
    data() {
        return {
            loginData : {
                username : '' , // test value ALf@12331 
                password : '' // test value 123@saJad3
            }
        }
    } , 
    methods : {
        ...mapActions({
            loginAction : 'auth/Login'
        }) , 
         async login() {
            if(this.validate()) {
               
                   await  this.loginAction(this.loginData)
                        .then(() => {
                            this.$router.push({name : 'profile'})
                        })                        
            }
        } ,
        validate() {
            return this.loginData.username && this.loginData.password ; 
        }
    }
}
</script>
<style scoped>
    #login {
        background-color: var(--green);
        height : 100vh ;
        box-sizing : border-box ;
        padding : 100px 0;
    }
    section.form-container {
        background-color : white ;
        box-sizing : border-box ;
        padding : 50px ;
        height : 300px ;
        width : 400px ;
        margin-right : auto ;
        margin-left : auto ;
    }
   div.input-container {
       margin-bottom : 30px ;
   }
   input {
       background-color : var(--gray) ;
       box-sizing: border-box;
       padding : 5px 0 5px 10px ; 
       height :50px ;
       width : 100% ;
   }
   input::placeholder {
       color : var(--darkgray) ;
       font-size : 1.6em ;  
   }
   #sajad::placeholder {
       background-color : black ;
       color : yellow ; 
   }
   #login-btn {
       background-color : var(--darkgreen) ; 
       color : white ;
       font-size : 1.6em ;
       width : 100% ;
       text-align : center ;
       padding :6px ;
   }
   #login-btn:hover {
       cursor: pointer;
   }
   @media screen and (max-width: 400px){
       section.form-container {
           width : 90% ;
       }
   }
</style>