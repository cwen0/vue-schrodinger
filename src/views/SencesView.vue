<template>
  <div>
    <div class="card">
      <el-card class="box-card">
        <div class="sch-card-header">
          <div>
            <Strong>
              <span>Count: {{sencesCount}}</span>
            </Strong>
          </div>
          <div>
            <el-button @click="clickCreateSences()">New</el-button>
          </div>
        </div>
        <sh-table :tableData="tableData"></sh-table>
      </el-card>
    </div>
    <div>
      <div v-show="isShow" class="sch-detail">
        <el-collapse v-model="activeNames">
          <el-collapse-item title="Sences Detail" name="1">
            <div class="sch-detail-header">
              <div class="sch-detail-summery">
                <span>Sence Name:
                  <strong> {{detail.name || ''}}</strong>
                </span>
              </div>
              <div>
                <el-button @click="clickDeleteSences()">
                  <i class="fa fa-trash-o" aria-hidden="true"></i> Delete</el-button>
                <el-button @click="clickUpdateSences()">
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
    <div>
      <el-dialog :title="dialogData.title" :visible.sync="dialog">
        <el-form :inline="true" :model="dialogData.sencesForm" ref="dialogData.sencesForm" label-width="6rem">
          <el-form-item label="Name:" prop="name">
            <el-input v-model="dialogData.sencesForm.name"></el-input>
          </el-form-item>
          <el-form-item label="Creator:" prop="creator">
            <el-input v-model="dialogData.sencesForm.creator"></el-input>
          </el-form-item>
          <div class="sch-boxes">
            <big>
              <strong>
                <span>Boxes: </span>
              </strong>
            </big>
            <a class="sch-a" @click="addBox">Add Box</a>
          </div>
          <div v-for="(box, index) in dialogData.sencesForm.boxes" :key="box.key">
            <div class="sch-boxes">
              <label>Box{{index}}</label>
              <a class="sch-a" @click="removeBox(box)"> Remove </a>
            </div>
            <el-form-item label="Name:" :prop="'boxes.' + index + '.name'">
              <el-input v-model="box.name"></el-input>
            </el-form-item>
            <el-form-item label="Cluster Template:" :prop="'boxes.'+index + '.cluster_template'">
              <el-select v-model="box.cluster_template" placeholder="select cluster template">
                <el-option v-for="(cluster, index) in clustersTemplate" :key="cluster.id" :label="cluster.name" :value="cluster.name"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="Cases Template:" :prop="'boxes.'+index + '.case_templates'">
              <el-select v-model="box.case_templates" multiple placeholder="select cases template" style="width: 33rem;">
                <el-option v-for="item in casesTemplate" :key="item.id" :label="item.name" :value="item.name">
                </el-option>
              </el-select>
            </el-form-item>
          </div>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialog = false; clearSencesForm()">Cancel</el-button>
          <el-button @click="resetForm('dialogData.sencesForm')">Reset</el-button>
          <el-button @click="submitForm('dialogData.sencesForm', dialogData.type)">OK</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  import shTable from '../components/table';
  import ajax from '../request/index'
  export default {
    components: {
      shTable
    },

    name: 'sences',
    data() {
      return {
        activeNames: ['1'],
        isShow: false,
        detail: '',
        sencesCount: 0,
        clustersTemplate: [],
        casesTemplate: [],
        tableData: {
          label: ["Name", "Creator", "Create Time", "Boxes Count"],
          prop: ["name", "creator", "create_time", "boxes_count"],
          list: [],

          handleClick: function (row) {
            ajax.getSencesByName(row.name).then((result) => {
              this.detail = result.data;
              this.isShow = true;
            }).catch(() => {})
          }.bind(this)
        },

        dialog: false,
        dialogData: {
          title: '',
          sencesForm: {
            name: '',
            creator: '',
            boxes: []
          }
        }
      }
    },

    created() {
      ajax.getSences().then((result) => {
        result.data.list.forEach(function (element) {
          element.boxes_count = element.boxes.length;
        });
        this.tableData.list = result.data.list;
        this.sencesCount = this.tableData.list.length;
      }).catch(() => {})

      ajax.getClustersTemplate().then((result) => {
        this.clustersTemplate = result.data.list;
      }).catch(() => {})

      ajax.getCasesTemplate().then((result) => {
        this.casesTemplate = result.data.list;
      }).catch(() => {})
    },

    methods: {
      clickCreateSences: function () {
        this.clearSencesForm();
        this.dialogData.title = "Create New Sences";
        this.dialogData.type = "new";
        this.dialogData.boxes = null;
        this.dialog = true;
        return;
      },
      clickUpdateSences: function () {
        this.dialogData = Object.assign({}, this.dialogData, {
          title: "Update Sences",
          type: "update",
          sencesForm: {
            name: this.detail.name,
            creator: this.detail.creator,
            boxes: this.detail.boxes
          }
        })
        this.dialog = true;
      },

      clickDeleteSences: function () {
        this.$confirm('This will delete this Sences, continue?', 'Warning', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          ajax.deleteSences(this.detail.name).then((result) => {
            this.$notify({
              title: "SUCCESS",
              type: 'success',
              message: 'Delete success!'
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
            message: 'Delete canceled'
          });
        });
        return;
      },

      clearSencesForm: function () {
        this.dialogData.sencesForm = {
          name: '',
          creator: '',
          boxes: []
        }
      },

      resetForm: function (formName) {
        if (this.$refs[formName] != null) {
          this.$refs[formName].resetFields();
        }
      },

      addBox: function () {
        this.dialogData.sencesForm.boxes.push({
          key: Date.now(),
          name: '',
          cluster_template: '',
          case_templates: []
        });
      },

      removeBox: function (item) {
        var index = this.dialogData.sencesForm.boxes.indexOf(item)
        if (index !== -1) {
          this.dialogData.sencesForm.boxes.splice(index, 1)
        }
      },

      submitForm: function (formName, type) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            switch (type) {
              case "new":
                this.createSences();
                break
              case "update":
                this.updateSences();
                break
              default:
                alert("Error");
                break;
            }
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },

      createSences: function () {
        ajax.setSences({
          name: this.dialogData.sencesForm.name,
          creator: this.dialogData.sencesForm.creator,
          boxes: this.dialogData.sencesForm.boxes
        }).then((result) => {
          this.dialog = false;
          result.data.boxes_count = this.dialogData.sencesForm.boxes.length;
          this.tableData.list.push(result.data);
          this.$notify({
            title: "SUCCESS",
            type: 'success',
            message: 'Create Sences Success!'
          });
          this.clearSencesForm();
        }).catch((resp) => {
          this.$notify({
            title: "ERROR",
            type: 'error',
            message: resp.message,
            duration: 0
          });
        })
      },

      updateSences: function () {
        ajax.setSences({
          id: this.detail.id,
          name: this.dialogData.sencesForm.name,
          creator: this.dialogData.sencesForm.creator,
          boxes: this.dialogData.sencesForm.boxes
        }).then((result) => {
          this.dialog = false;
          this.$notify({
            title: "SUCCESS",
            type: 'success',
            message: 'Update Sences Success!'
          });

          var index = this.tableData.list.indexOf(this.dialogData.sencesForm);
          if (index !== -1) {
            this.tableData.list[index] = this.dialogData.sencesForm;
            this.detail = this.dialogData.sencesForm;
          }
          this.clearSencesForm();
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

<style lang="scss">
  .sch-boxes {
    margin-left: 1rem;
    margin-bottom: 1rem;
  }

  .sch-a {
    margin-left: 1rem;
    color: blueviolet;
  }

</style>
