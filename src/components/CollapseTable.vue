<template>
<div>
  <div id="collapseTable">
    <el-table :data="data.list" style="width: 100%" :row-key="getRowKeys" :expand-row-keys="expands" height="620" @row-click="toggleRowExpansion">
      <el-table-column type="expand">
        <!-- display all boxes in a table with some important features -->
        <div id="boxesCount">
          <span><strong>Total boxes: {{totalBox}}</strong></span>
        </div>
        <div id="boxesListTable" style="margin-top: 5px">
          <el-table :data="boxesListTable.boxesList" style="width: 100%">
            <el-table-column v-for="(item, index) in boxesListTable.prop" :key="index" :prop="item" :label="boxesListTable.label[index]"></el-table-column>
            <el-table-column label="Detail">
              <template slot-scope="scope">
                <el-button @click="handleDetailClick(scope.row)" size="small">
                  Detail
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-table-column>
      <el-table-column v-for="(item, index) in data.prop" :key="index" :prop="item" :label="data.label[index]">
      </el-table-column>
      <el-table-column label="Operation">
        <template slot-scope="scope">
          <!-- <router-link tag='el-button' :to="'/missionOperation?id='+scope.row.id">
            Manage
          </router-link> -->
          <el-button @click.native="handleManageClick(scope.row.id)">Manage</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <div id="detailDialog">
    <el-dialog :visible.sync="dialog">
      <!-- <div class="sch-detail"> -->
        <div class="sch-detail-header">
          <div class="sch-detail-summery">
            <span>Box:
              <strong> {{this.boxDialogTitle}}</strong>
            </span>
          </div>
          <div>
            <el-button @click="clickRunMission">
              <i class="fa fa-play" aria-hidden="true"></i> Run</el-button>
            <el-button @click="confirmStopBox">
              <i class="fa fa-stop" aria-hidden="true"></i> Stop</el-button>
          </div>
        </div>
        <div class="sch-detail-body">
          <pre>{{boxDialogContent}}</pre>
        </div>
      <!-- </div> -->
    </el-dialog>
  </div>
</div>
</template>

<script>
  import ajax from '../request/index';
  import _ from 'lodash';

  export default {
    props: ['tableData'],
    data() {
      return {
        totalBox: 0,
        // An array contains the row_ids of expanded row.
        expands: [],
        boxesLength: 0,
        currentRowId: 0,
        preRowId: 0,
        data: this.tableData,
        missionId: '',
        detailContent: '',
        boxDialogContent: '',
        boxesListTable: {
          label: ['Name', 'Status', 'Stage'],
          prop: ['name', 'status', 'stage'],
          boxesList: []
        },
        dialog: false,
        boxDialogTitle: '',

      }
    },
    methods: {
      setCurrent(row) {
        this.$refs.singleTable.setCurrentRow(row)
      },
      // Get the row_id, which expanded.
        getRowKeys(row) {
          return row.id
        },

      toggleRowExpansion(row) {
        console.log('hello from toggle ', row)
        if(row.id == this.preRowId) {
          this.preRowId = 0
          this.expands = []
          return
        }
        this.preRowId = row.id
        this.expands = []
        this.expands.push(row.id)

        // Get Mission report by row ID
        ajax.getMissionReportByID(row.id).then((result) => {
          this.boxesListTable.boxesList = []
          this.detailContent = result.data.data
          this.missionId = row.id
          console.log('mission' , this.detailContent)
          var vals = _.values(this.detailContent.boxes)
          console.log("before flatten ", vals)
          vals.forEach(item => {
            var i = item
            return i[(i.length) - 1]
          })
          console.log('before flatten and get the lasted one', vals)
          this.boxesListTable.boxesList = _.flatten(vals)
          console.log("after flatten ", this.boxesListTable.boxesList)
          this.totalBox = this.boxesListTable.boxesList.length
          console.log("expand_content ", this.detailContent)
        }).catch((result) => {})
      },

      handleManageClick: function(id) {
        console.log('hello from manage')
        console.log('manage id ', id)
        let route = this.$router.resolve({path: '/missionOperation?id='+id})
        window.open(route.href, '_blank')
      },

      handleDetailClick: function(val) {
        this.boxDialogTitle = val.name
        this.boxDialogContent = val
        this.dialog = true
      },

      clickRunMission: function() {
        console.log('inside run mission and boxDialogTitle is ', this.boxDialogTitle)
        this.$confirm('Will RUN this box, contimue?', 'Warning', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
            ajax.runBoxByName(this.missionId, this.boxDialogTitle).then((result) => {
              if(result.data.code != 200) {
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
                type: 'sucess',
                message: 'RUNNING'
              });
            }).catch((resp) => {
                this.$notify({
                  title: 'ERROR',
                  type: 'error',
                  message: resp.message,
                  duration: 0
                });
            });
        }).catch(() => {
           this.$notify({
             title: 'INFO',
             type: 'info',
             message: 'Run Error'
           });
        });
      },

      confirmStopBox: function () {
        this.$confirm('Will STOP this box, continue?', 'Warning', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          ajax.stopBoxByName(this.missionId, this.boxDialogTitle).then((result) => {
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
              message: 'STOPPED!'
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

<style>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: red;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }

  /* .el-collapse-arrow {
    background-color: red;
    transition: transform 1s;
      transition-property: transform;
      transition-duration: 1s;
      transition-timing-function: initial;
      transition-delay: initial;
  } */

  /* .el-table__expand-icon {
    background-color: blue;
  } */

  /* .el-table__expand-icon.el-table__expand-icon--expanded {
    background-color:yellow;
  } */

  /* .el-icon.el-icon-arrow-right {
    background-color: green;
    transform: rotate(0deg);
    transition: transform 2s;
      transition-property: rotate(0deg);
      transition-duration: 2s;
      transition-timing-function: initial;
      transition-delay: initial;
  } */

  /* .el-table__expanded-cell {
    background-color: greenyellow;
    transition-property: margin-right 2s;
    transition-timing-function: steps(6,end);

    overflow: hidden;
    transition: height 1000s;
  } */

  /* .expanded-div {
    background-color: red;
    transition-duration: 2s;
    transition-timing-function: initial;
    transition-delay: initial;

  } */
  /* .el-collpase-item__header__arrow {
    margin-right: 8px;
    transition: transform 1s;
      transition-property: transform;
      transition-duration: 1s;
      transition-timing-function: initial;
      transition-delay: initial;
  } */
  /* .el-table tr {
    background-color: blue;
  } */
</style>

