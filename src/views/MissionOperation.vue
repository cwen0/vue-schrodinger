<template>
  <div>
    <div class="card">
      <el-card class="box-card">
        <div class="sch-card-header">
          <div>
            <!-- <span>Mission Name: {{missionCount}}</span> -->
            <span><Strong>Mission ID:</Strong> {{mission_id}}</span>
          </div>
          <div>
            <el-button @click="clickRerun" >Rerun</el-button>
            <el-button @click="clickHold" type="primary">Hold</el-button>
            <el-button type="success" @click="clickCreateMission" >New</el-button>
          </div>
        </div>
      </el-card>
    </div>
     <div>
      <el-dialog :title="dialogData.title" :visible.sync="dialog">
        <el-form :model="dialogData.missionForm" :rules="dialogData.missionRules" ref="dialogData.missionForm" label-width="6rem">
          <el-form-item label="PD Version:" prop="pd_version">
            <el-input placeholder="branch:xxx / hash:xxx / latest" v-model="dialogData.missionForm.pd_version"></el-input>
          </el-form-item>
          <el-form-item label="TiDB Version:" prop="tidb_version">
            <el-input placeholder="branch:xxx / hash:xxx / latest" v-model="dialogData.missionForm.tidb_version"></el-input>
          </el-form-item>
          <el-form-item label="TiKV Version:" prop="tikv_version">
            <el-input placeholder="branch:xxx / hash:xxx / latest" v-model="dialogData.missionForm.tikv_version"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialog = false; clearMissionForm()">Cancel</el-button>
          <el-button @click="resetForm('dialogData.missionForm')">Reset</el-button>
          <el-button @click="submitForm('dialogData.missionForm', dialogData.type)">OK</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import ajax from '../request/index'

export default {
  name: 'missionOperation',
  data() {
    return {
      mission_id: this.$route.query.id,
      dialog: false,
      detail: '',
      dialogData: {
        title: '',
        missionForm: {
          pd_version: '',
          tidb_version: '',
          tikv_version: '',
        } ,
         missionRules: {
            pd_version: [{
                required: true,
                message: 'Please pd version',
                trigger: 'blur'
              },
              {
                min: 1,
                max: 200,
                message: 'Length should be 1 to 200',
                trigger: 'blur'
              }
            ],
            tikv_version: [{
                required: true,
                message: 'Please tikv version',
                trigger: 'blur'
              },
              {
                min: 1,
                max: 200,
                message: 'Length should be 1 to 200',
                trigger: 'blur'
              }
            ],
            tidb_version: [{
                required: true,
                message: 'Please tidb version',
                trigger: 'blur'
              },
              {
                min: 1,
                max: 200,
                message: 'Length should be 1 to 200',
                trigger: 'blur'
              }
            ],
         }
      }
    }
  },

  created() {
     if (this.mission_id == null || this.mission_id == "") {
       alert("mission id cannot be found");
       return
     }

     ajax.getMissionReportByID(this.mission_id).then((result) => {
        this.detail = result.data.data;
     }).catch(() => {})
  },

  methods: {
      clickRerun: function() {
        console.log('hello from rerun')
        if (this.mission_id == null || this.mission_id == "") {
          alert("mission id cannot be empty");
          return
        }
         this.dialogData.missionForm.tidb_version = this.detail.tidb_version;
         this.dialogData.missionForm.tikv_version = this.detail.tikv_version;
         this.dialogData.missionForm.pd_version = this.detail.pd_version;

        ajax.replayMissionWithData(this.mission_id, this.dialogData.missionForm).then((result) => {
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
            message: 'replay Mission Success!'
          });
          this.clearMissionForm();
        }).catch((resp) => {
          this.$notify({
            title: "ERROR",
            type: 'error',
            message: resp.message,
            duration: 0
          });
        })
      },

      clickHold: function() {
        if (this.mission_id == null || this.mission_id == "") {
          alert("mission id cannot be empty");
          return
        }
        ajax.holdMission(this.mission_id).then((result) => {
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
            message: 'hold Mission Success!'
          });
          this.clearMissionForm();
        }).catch((resp) => {
          this.$notify({
            title: "ERROR",
            type: 'error',
            message: resp.message,
            duration: 0
          });
        })
      },

      clickCreateMission: function () {
        if (this.mission_id == null || this.mission_id == "") {
          alert("mission id cannot be empty");
          return
        }
        this.dialogData = Object.assign({}, this.dialogData, {
          title: "Create New Mission With New Version",
        })
        this.dialog = true;
      },
      resetForm(formName) {
        if (this.$refs[formName] != null) {
          this.$refs[formName].resetFields();
        }
      },
      submitForm: function (formName, type) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
              this.createMission();
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },

      clearMissionForm: function () {
        this.dialogData.missionForm = {
          name: '',
          scenes_name: '',
          pd_version: '',
          tidb_version: '',
          tikv_version: '',
          slack_channel: '#stability-test',
          timeout: ''
        }
      },
      createMission: function () {
        //  this.dialogData.missionForm.name = this.detail.name;
        //  this.dialogData.missionForm.scenes_name= this.mission.scenes.name;
        //  this.dialogData.missionForm.timeout = this.detail.timeout;
        //  this.dialogData.missionForm.slack_channel = this.mission.messager.callback;
        ajax.replayMissionWithData(
          this.mission_id,
          this.dialogData.missionForm
        ).then((result) => {
          if (result.data.code != 200) {
            this.$notify({
              title: "ERROR",
              type: 'error',
              message: result.data.message,
              duration: 0
            });
            return
          }
          this.dialog = false;
          this.$notify({
            title: "SUCCESS",
            type: 'success',
            message: 'Create Mission Success!'
          });
          this.clearMissionForm();
        }).catch((resp) => {
          this.$notify({
            title: "ERROR",
            type: 'error',
            message: resp.message,
            duration: 0
          });
        })
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

</style>
