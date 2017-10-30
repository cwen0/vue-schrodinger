<template>
    <el-card class="box-card">
    <my-table :table-data="list"></my-table>
  </el-card>
</template>

<script>
import myTable from  './table'
import ajax from '../request/index'

export default {
  components: {myTable},
  name: 'card',
  data() {
    return {
      list: [{
        name:'', 
        status:'', 
        start_time:''
      }]
    }
  }, 
  created() {
    ajax.getMission().then((result)=> {
      this.list = result.data.list
    }).catch(()=>{
    })
  }
}
</script>

<style scoped>

  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 80rem;
  }

</style>