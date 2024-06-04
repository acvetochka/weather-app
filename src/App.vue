<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <Cards msg="Welcome to Your Vue.js App" name=""/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Cards from "./components/Cards.vue"

export default {
  name: 'App',
  components: {
    Cards
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
