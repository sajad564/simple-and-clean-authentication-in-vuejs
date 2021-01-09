<template>
  <div id="app">
    <mynav />
    <router-view/>
  </div>
</template>

<style>
</style>
<script>
import mynav from './components/navbar'
export default {
  name : 'app' , 
  data() {
    return {

    }
  } ,
  components : {
    mynav 
  }
}
</script>
