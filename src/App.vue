<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
 export default {
   name: 'app',
   methods:{
     saveState(){
        sessionStorage.setItem('userState',JSON.stringify(this.$store.state.user))
     },
   },
   mounted() {
    window.addEventListener('unload',this.saveState);
   }

 }
</script>
<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
</style>
