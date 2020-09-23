<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view>tree可编辑</router-view>
    <!-- <router-view to="/demo/srcoll">srcoll</router-view> -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
