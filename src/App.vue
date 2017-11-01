<template>
  <div id="app" class="app-container">
    <headerComponent/>
    <router-view></router-view>
  </div>
</template>

<script>
import headerComponent from './components/header'

export default {
  name: 'app', 
  components: {
    headerComponent
  }
}
</script>

<style lang="scss">
//#app {
//  font-family: 'Avenir', Helvetica, Arial, sans-serif;
//  -webkit-font-smoothing: antialiased;
//  -moz-osx-font-smoothing: grayscale;
//  color: #2c3e50;
//  margin: 30px auto;
//  padding: 0 20px;
//  max-width: 1600px;
//  min-width: 600px;
//  display: flex;
//  align-self: center;
//}
//
//html{
//    font-size:20px;
//}
 @import './styles/index.scss'; 
</style>
