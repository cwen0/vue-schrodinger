<template>
  <div>
    <div class="header">
       <h1 class="title">
        Schrodinger
      </h1>
      <span>TiDB Cluster Stability Test</span>
    </div>
   
    <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
      <el-tab-pane label="Daily View" name="first"><card value="233"></card></el-tab-pane>
      <el-tab-pane label="Sences" name="second"></el-tab-pane>
      <el-tab-pane label="Case Template" name="third"><card value="233"></card></el-tab-pane>
      <el-tab-pane label="Cluster Template" name="fourth"><card value="233"></card></el-tab-pane>
      <el-tab-pane label="History" name="fives">History</el-tab-pane>
      <el-tab-pane label="Release" name="six">Release</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  import card from '../components/card'
  export default {
    components: {card},
    data() {
      return {
        activeName2: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style scoped>
  .header{
    display: flex;
    align-items: baseline;
  }

  .title {
    margin-right: 25px;
  }
</style>

