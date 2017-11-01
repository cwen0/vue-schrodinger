<template>
  <div>
    <div class="card">
      <el-card class="box-card">
        <div class="sch-card-header">
          <div>
              <Strong><span>Count: </span></Strong>
          </div>
          <div>
            <el-button>New</el-button>
          </div>
        </div>
        <sh-table :tableData="tableData"></sh-table>
      </el-card>
    </div>
    <!-- <div v-show="isShow" class="sch-detail">
        <el-collapse v-model="activeNames">
          <el-collapse-item title="Mission Detail" name="1">
            <div class="sch-detail-header">
              <div class="sch-detail-summery">
                <span>Mission Name:
                  <strong> {{detail.name}}</strong>
                </span>
                <span>Status:
                  <strong> {{detail.status}}</strong>
                </span>
              </div>
              <div>
                <el-button>
                  <i class="fa fa-play" aria-hidden="true"></i> Run</el-button>
                <el-button v-on:click="confirmStopMission()">
                  <i class="fa fa-stop" aria-hidden="true"></i> Stop</el-button>
                <el-button>
                  <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</el-button>
              </div>
            </div>
            <div class="sch-detail-body">
              <pre>{{detail}}</pre>
            </div>
          </el-collapse-item>
        </el-collapse> 
      </div> -->

  </div>
</template>

<script>
  import shTable from '../components/table';

  export default {
    components: {
      shTable
    },

    name: 'cases',

    data() {
      return {
        tableData: {
          label: ["Name", "Creator", "Create Time", "Type"],
          prop: ["name", "creator", "create_time", "type"],
          list: [{
            id: '',
            name: '',
            creator: '',
            create_time: '',
            type: ''
          }]
        }
      }
    },

    created() {
      this.tableData.list = null;
    }
  }

</script>

<style lang="scss">
  .sch-card-header {
    display: flex;
    flex-flow: row;
    align-items: baseline;
    justify-content: space-between;
    padding: 0 2rem 1rem 1rem;
  }

</style>
