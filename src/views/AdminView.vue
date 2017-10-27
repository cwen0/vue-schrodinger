<template>
  <div>
    <div class="header">
       <h1 class="title">
        Schrodinger
      </h1>
      <span>TiDB Cluster Stability Test</span>
    </div>
   
    <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
      <el-tab-pane label="Daily View" name="first"><my-cmp value="233"></my-cmp></el-tab-pane>
      <el-tab-pane label="Sences" name="second">Jobs</el-tab-pane>
      <el-tab-pane label="Case Template" name="third"><my-cmp value="233"></my-cmp></el-tab-pane>
      <el-tab-pane label="Cluster Template" name="fourth"><my-cmp value="233"></my-cmp></el-tab-pane>
      <el-tab-pane label="History" name="fives">History</el-tab-pane>
      <el-tab-pane label="Release" name="six">Release</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  import myCmp from '../components/myCmp'
  export default {
    components: {myCmp},
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

