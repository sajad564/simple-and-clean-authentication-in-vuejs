<template>
<div id="profile">
    <!-- {{user}} -->

</div>
</template>
<script>
import {mapActions , mapGetters} from 'vuex'
export default {
    name : 'profile' , 
    data(){
        return {
           
        }
    } , 
    computed :  {
        ...mapGetters({
            user : 'auth/USER'
        })
    } , 
    methods : {
        ...mapActions({
           profileAction :  'auth/Profile'
        })
    } ,
    created() {
        this.profileAction() ; 
    }
}
</script>
<style scoped></style>