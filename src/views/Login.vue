<template>
<div id="login">
    <section class="form-container">
        <form @submit.prevent='login'>
            <div class="input-container">
                <label for="username" >username</label>
                <input type="text" v-model="loginData.username" name="username" id="username" >
            </div>
            <div class="input-container">
                <label for="password">password</label>
                <input type="text" v-model="loginData.password" name="password" id="password" >
            </div>
            <button type="submit" :disabled='!validate'>login</button>
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
                username : 'ALf@12331' , 
                password : '123@saJad3'
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
                        .catch(err => console.log(err.response.data.errors))
                        
            }
        } ,
        validate() {
            return this.loginData.username && this.loginData.password ; 
        }
    }
}
</script>
<style scoped>
    
</style>