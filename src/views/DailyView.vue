<template>
  <div>
    <div class="card">
      <el-card class="box-card">
        <div class="sch-card-header">
          <div>
            <Strong>
              <span>Count: {{missionCount}}</span>
            </Strong>
          </div>
          <div>
            <el-radio-group v-model="period">
              <el-radio-button label="daily"></el-radio-button>
              <el-radio-button label="weekly"></el-radio-button>
              <el-radio-button label="monthly"></el-radio-button>
              <el-radio-button label="yearly"></el-radio-button>
            </el-radio-group>
          </div>
        </div>
        <collapse-table :tableData="tableData" :detail="detail" :isShow="isShow"></collapse-table>
        <!-- <sh-table :tableData="tableData" :detail="detail"></sh-table> -->
      </el-card>
    </div>
    <!-- <div v-show="isShow" class="sch-detail">
      <el-collapse v-model="activeNames" accordion>
        <el-collapse-item title="Mission Detail" name="1">
          <div class="sch-detail-header">
            <div class="sch-detail-summery">
              <span>Mission Name:
                <strong> {{detail.name}}</strong>
              </span>
              <span>Status:
                <strong> {{detail.status}}</strong>
              </span>
            </div> -->
            <!-- <div>
              <el-button>
                <i class="fa fa-play" aria-hidden="true"></i> Run</el-button>
              <el-button v-on:click="confirmStopMission()">
                <i class="fa fa-stop" aria-hidden="true"></i> Stop</el-button>
              <el-button>
                <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</el-button>
            </div> -->
          <!-- </div>
          <div class="sch-detail-body">
            <pre>{{detail}}</pre>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div> -->
    <div id="pagination">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
      :page-sizes="[1, 2, 3, 4]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" background :total="missionCount">
      </el-pagination>
    </div>
  </div>

</template>

<script>
  // import shTable from '../components/Table'
  import collapseTable from '../components/CollapseTable';
  import ajax from '../request/index';

  export default {
    components: {
      // shTable
      collapseTable
    },
    name: 'daily',

    data() {
      return {
        activeNames: '1',
        pageSize: 2,
        currentPage: 1,
        isShow: false,
        detail: '',
        missionCount: 0,
        period: "daily",
        tableData: {
          label: ['Mission ID', 'Mission Name', 'Status', 'Scenes', 'Update Time'],
          prop: ['id', 'name', 'status', 'scenes.name', 'update_time'],
          list: [],
          // expand_content: '',

          handleClick: function (row) {
            if (row == null) {
              return
            }
            console.log('row is ', row, 'and row id is ', row.id)
            // let detail
            // console.log('activeName is ', this.activeNames)
             ajax.getMissionReportByID(row.id).then((result) => {
              // detail = result.data.data
              this.detail = result.data.data;
              this.detail.scenes_name = row.scenes.name;
              this.detail.status = row.status;
              this.detail.name = row.name;
              this.isShow = true;

            }).catch(() => {})



            ajax.getMissionDetailByID(row.id).then((result) => {
              this.detail.name = result.data.data.name;
              this.detail.pd_version = result.data.data.pd_version;
              this.detail.tidb_version = result.data.data.tidb_version;
              this.detail.tikv_version = result.data.data.tikv_version;
              this.detail.timeout = result.data.data.timeout;
              // console.log("come on babe this.detail ", this.detail.name);
              if (result.data.data.messager.callback == "") {
                this.detail.slack_channel = "#stability_tester"
              } else {
                this.detail.slack_channel = result.data.data.messager.callback;
              }
            }).catch(() => {})

            // this.isShow = true;
            // debugger
            // console.log("this.detail ", this.detail);
            // this.tableData.expand_content = this.detail;
            console.log("tabledata ", this.tableData);
          }.bind(this)
        },
      }
    },

    created() {
      this.fetchAndSetMissions();
    },

    methods: {
      fetchAndSetMissions: function(offset = 0, size = 2) {
        ajax.getMissionByPeriod(this.period, offset, size).then((result) => {
          this.tableData.list = result.data.data;
          console.log('tabledata ', this.tableData.list);
          this.missionCount = this.tableData.list.length;
        }).catch(() => {})
      },

      handleSizeChange: function(pageSize) {
        this.pageSize = pageSize;
        this.fetchAndSetMissions(0, this.pageSize);
        this.currentPage = 1;
      },

      handleCurrentChange: function(currentPage) {
        this.currentPage = currentPage;
        this.fetchAndSetMissions((currentPage - 1) * this.pageSize, this.pageSize);
      },

      // confirmStopMission: function () {
      //   this.$confirm('This will stop this mission, continue?', 'Warning', {
      //     confirmButtonText: 'OK',
      //     cancelButtonText: 'Cancel',
      //     type: 'warning'
      //   }).then(() => {
      //     ajax.stopMissionByID(this.detail.id).then((result) => {
      //       if (result.data.code != 200) {
      //         this.$notify({
      //           title: "ERROR",
      //           type: 'error',
      //           message: result.data.message,
      //           duration: 0
      //         });
      //         return
      //       }
      //       this.$notify({
      //         title: "SUCCESS",
      //         type: 'success',
      //         message: 'Start to stop!'
      //       });
      //     }).catch((resp) => {
      //       this.$notify({
      //         title: "ERROR",
      //         type: 'error',
      //         message: resp.message,
      //         duration: 0
      //       });
      //     });
      //   }).catch(() => {
      //     this.$notify({
      //       title: "INFO",
      //       type: 'info',
      //       message: 'Stop canceled'
      //     });
      //   });
      // }
    },

    watch: {
      period: function (val) {
        ajax.getMissionByPeriod(val).then((result) => {
          this.tableData.list = result.data.data;
          this.missionCount = this.tableData.list.length;
          this.detail = '';
          this.isShow = false;
        }).catch(() => {})
      }
    }
  }

</script>
<style>
  .el-pagination {
    padding: 20px;
    display: table;
    margin: 0 auto;
  }
</style>
