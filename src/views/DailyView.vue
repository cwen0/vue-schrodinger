<template>
  <div>
    <div class="card">
      <el-card class="box-card">
        <sh-table :tableData="tableData"></sh-table>
      </el-card>
    </div>
    <div v-show="isShow" class="sch-detail">
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
    </div>

  </div>

</template>

<script>
  import shTable from '../components/table';
  import ajax from '../request/index';

  export default {
    components: {
      shTable
    },
    name: 'daily',

    data() {
      return {
        activeNames: ['1'],
        isShow: false,
        detail: '',
        tableData: {
          label: ['Mission', 'Status', 'Start Time'],
          prop: ['name', 'status', 'start_time'],
          list: [{
            id: '',
            name: '',
            status: '',
            start_time: ''
          }],

          handleClick: function (row) {
            ajax.getMissionByID(row.id).then((result) => {
              this.detail = result.data;
              this.isShow = true;
            }).catch(() => {})
          }.bind(this)
        }
      }
    },

    created() {
      ajax.getMissions().then((result) => {
        var tmpList = result.data.list;
        var dailyMissions = [];
        tmpList.forEach(function (value) {
          var tmpDate = new Date(value.start_time);
          var now = new Date();
          var tmpDate2 = new Date(now.getTime() - (7 * 24 * 60 * 60 * 1000));
          if (tmpDate > tmpDate2) {
            dailyMissions.push(value);
          }
        })
        this.tableData.list = dailyMissions;
      }).catch(() => {})
    },

    methods: {
      confirmStopMission() {
        this.$confirm('This will stop this mission, continue?', 'Warning', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          ajax.stopMissionByID(this.detail.id).then((result) => {
            console.log(result.message);
            this.$notify({
              title: "SUCCESS",
              type: 'success',
              message: 'Start to stop!'
            });
          }).catch((resp) => {
            this.$notify({
              title: "ERROR",
              type: 'error',
              message: resp.message,
              duration: 0
            });
          });
        }).catch(() => {
          this.$notify({
            title: "INFO",
            type: 'info',
            message: 'Stop canceled'
          });
        });
      }
    }
  }

</script>
<style lang="scss">
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 80rem;
  }

  .card {
    display: flex;
    flex-flow: row;
  }

  .sch-detail {
    margin-top: 2rem; // display: flex; 
  }

  .sch-detail-header {
    padding: 1rem 1rem 1rem 1rem;
    display: flex;
    flex-flow: row;
    align-items: baseline;
    justify-content: space-between;
  }

  .sch-detail-summery span {
    padding-right: 3rem;
  }

  .sch-detail-summery strong {
    padding-left: 1rem;
  }

  .sch-detail-body {
    border: 1px solid #d1dbe5;
    padding: 0 1rem 0 1rem;
  }

</style>
