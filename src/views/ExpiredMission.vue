<template>
  <div>
    <div class="card">
      <el-card class="box-card">
        <div class="sch-card-header">
          <div>
            <Strong>
              <span>Expired Mission Count: {{missionCount}}</span>
            </Strong>
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
import ajax from '../request/index'
import shTable from '../components/table';
// import collapseTable from '../components/CollapseTable'

export default {
  components: {
    shTable
    // collapseTable
  },

  name: 'expiredMission',
  data() {
    return {
        activeNames: ['1'],
        isShow: false,
        detail: '',
        missionCount: 0,

        tableData: {
          label: ['Mission ID', 'Mission Name', 'Status', 'Scenes', 'Update Time','Slack Channel'],
          prop: ['id', 'name', 'status', 'scenes.name', 'update_time', 'messager.callback'],
          list: [],

          // handleClick: function (row) {
          //   if (row == null) {
          //      return
          //    }
          //    ajax.getMissionReportByID(row.id).then((result) => {
          //      this.detail = result.data.data;
          //      this.detail.scenes_name = row.scenes.name;
          //      this.detail.status = row.status;
          //      this.detail.slack_channel = row.messager.callback;
          //      this.detail.id = row.id;
          //    }).catch(() => {})
          //    ajax.getMissionDetailByID(row.id).then((result) => {
          //      this.detail.name = result.data.data.name;
          //      this.detail.pd_version = result.data.data.pd_version;
          //      this.detail.tidb_version = result.data.data.tidb_version;
          //      this.detail.tikv_version = result.data.data.tikv_version;
          //      this.detail.timeout = result.data.data.timeout;
          //      if (result.data.data.messager.callback == "") {
          //        this.detail.slack_channel = "#stability_tester"
          //      } else {
          //        this.detail.slack_channel = result.data.data.messager.callback;
          //      }
          //   }).catch(() => {})
          //   this.isShow = true;
          // }.bind(this),

          // handleButtonClick: function(row) {
          //    if (row == null) {
          //      return
          //    }
          //    this.$confirm('Set mission ' + row.id + ' isHandled. Continue?', 'Warning', {
          //        confirmButtonText: 'OK',
          //        cancelButtonText: 'Cancel',
          //        type: 'warning'
          //      }).then(() => {
          //        ajax.handleMission(row.id).then((result) => {
          //          if (result.data.code != 200) {
          //              this.$notify({
          //                title: "ERROR",
          //                type: 'error',
          //                message: result.data.message,
          //                duration: 0
          //              });
          //              return
          //          }
          //          this.$notify({
          //            title: "SUCCESS",
          //            type: 'success',
          //            message: 'Set Operation completed'
          //          });
          //        }).catch((resp) => {
          //         this.$notify({
          //            title: "ERROR",
          //            type: 'error',
          //            message: resp.message,
          //            duration: 0
          //          });
          //        });
          //      }).catch(() => {
          //        this.$notify({
          //           title: "INFO",
          //          type: 'info',
          //          message: 'Set Operation canceled'
          //        });
          //      });
          // }.bind(this),
       },
    }
   },

  created() {
    // debugger
    console.log('hello from expiredmission')
      ajax.getExpiredMission().then((result) => {
        this.tableData.list = result.data.data
        this.missionCount = this.tableData.list.length
      }).catch((resp) => {
        this.$notify({
          title: 'ERROR',
          type: 'error',
          message: 'Fetch expired Mission failed',
          duration: 0
        })
      });
  },

  // methods: {

  // }
}
</script>

<style>
  .el-select .el-input {
    width: 10rem;
  }

  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }

  .el-input-group {
    margin-bottom: 1rem;
  }

  .sch-search {
    margin-top: 1rem;
  }

  .el-form {
    margin-right: 2rem;
  }

</style>
