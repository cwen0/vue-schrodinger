<template>
  <div>
    <div class="card">
      <el-card class="box-card">
        <div>
          <h3>Expired Mission Count: {{missionCount}}</h3>
        </div>
        <div>
           <my-table :tableData="tableData"></my-table>
        </div>
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
            <!-- <div>
              <el-button>
                <i class="fa fa-play" aria-hidden="true"></i> Run</el-button>
              <el-button v-on:click="confirmStopMission()">
                <i class="fa fa-stop" aria-hidden="true"></i> Stop</el-button>
              <el-button>
                <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</el-button>
            </div> -->
          </div>
          <div class="sch-detail-body">
            <pre>{{detail}}</pre>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
    <div id="pagination">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
      :page-sizes="[1, 2, 3, 4]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" background :total="missionCount">
      </el-pagination>
    </div>
  </div>

</template>

<script>
import ajax from '../request/index'
import myTable from  '../components/table'

export default {
  components: {myTable},
  name: 'expiredMission',
  data() {
    return {
        activeNames: ['1'],
        isShow: false,
        detail: '',
        missionCount: 0,
        pageSize: 2,
        currentPage: 1,
        clusterCount: 0,

        tableData: {
           label: ['Mission ID', 'Mission Name', 'Status', 'Scenes', 'Update Time'],
           prop: ['id', 'name', 'status', 'scenes.name', 'update_time'],
           list: [],

          handleClick: function (row) {
            if (row == null) {
               return
             }
             ajax.getMissionReportByID(row.id).then((result) => {
               this.detail = result.data.data;
               this.detail.scenes_name = row.scenes.name;
               this.detail.status = row.status;
               this.detail.slack_channel = row.messager.callback;
               this.detail.id = row.id;
             }).catch(() => {})
             ajax.getMissionDetailByID(row.id).then((result) => {
               this.detail.name = result.data.data.name;
               this.detail.pd_version = result.data.data.pd_version;
               this.detail.tidb_version = result.data.data.tidb_version;
               this.detail.tikv_version = result.data.data.tikv_version;
               this.detail.timeout = result.data.data.timeout;
               if (result.data.data.messager.callback == "") {
                 this.detail.slack_channel = "#stability_tester"
               } else {
                 this.detail.slack_channel = result.data.data.messager.callback;
               }
            }).catch(() => {})
            this.isShow = true;
          }.bind(this),

          handleButtonClick: function(row) {
             if (row == null) {
               return
             }
             this.$confirm('Set mission ' + row.id + ' isHandled. Continue?', 'Warning', {
                 confirmButtonText: 'OK',
                 cancelButtonText: 'Cancel',
                 type: 'warning'
               }).then(() => {
                 ajax.handleMission(row.id).then((result) => {
                   if (result.data.code != 200) {
                       this.$notify({
                         title: "ERROR",
                         type: 'error',
                         message: result.data.message,
                         duration: 0
                       });
                       return
                   }
                   this.$notify({
                     title: "SUCCESS",
                     type: 'success',
                     message: 'Set Operation completed'
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
                   message: 'Set Operation canceled'
                 });
               });
          }.bind(this),
       },
    }
   },

  created() {
      this.fetchAndSetExpiredMission();
  },

  methods: {
    fetchAndSetExpiredMission: function(offset = 0, size = 2) {
        ajax.getExpiredMission().then((result) => {
        this.tableData.list = result.data.data;
        this.missionCount = this.tableData.list.length;
      }).catch(() => {})
      },

    handleSizeChange: function(pageSize) {
      this.pageSize = pageSize;
      this.fetchAndSetExpiredMission(0, this.pageSize);
      this.currentPage = 1;
    },

    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage;
      this.fetchAndSetExpiredMission((currentPage - 1) * this.pageSize, this.pageSize);
    }
  }
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

  .el-pagination {
    display: table;
    margin: 0 auto;
  }
</style>
