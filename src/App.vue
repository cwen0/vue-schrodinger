<template>
  <div id="app" class="app-container">
    <headerComponent v-if='notMissionOperationView'/>
    <router-view></router-view>
  </div>
</template>

<script>
import headerComponent from './components/header'

export default {
  name: 'app',
  components: {
    headerComponent
  },
  data() {
      let notMissionOperationView = true;
      let activeIndex = '';
      location.hash && (activeIndex = location.hash.slice(2));
      console.log('activeindex is ', activeIndex)
      if(activeIndex.includes('missionOperation')) {
        console.log('testestae')
        notMissionOperationView = false;
      }
      return {
        activeIndex,
        notMissionOperationView
      };
  }
}
</script>

<style lang="scss">
 @import './styles/index.scss';
</style>
