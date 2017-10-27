<template>
  <div id="app" class="app-container">
     <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 30px auto;
  padding: 0 20px;
  max-width: 1600px;
  min-width: 600px;
  display: flex;
}
//.app-side {
//  flex-basis: 200px;
//}
//.app-main {
//  margin-left: 20px;
//}
</style>
