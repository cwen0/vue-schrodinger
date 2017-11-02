<template>
  <div>
    <div class="card">
      <el-card class="box-card">
        <div class="sch-card-header">
          <div>
            <Strong>
              <span>Count: {{caseCount}}</span>
            </Strong>
          </div>
          <div>
            <el-button @click="dialogCreateCaseTemplate = true">New</el-button>
          </div>
        </div>
        <sh-table :tableData="tableData"></sh-table>
      </el-card>
    </div>
    <div v-show="isShow" class="sch-detail">
      <el-collapse v-model="activeNames">
        <el-collapse-item title="Case Template Detail" name="1">
          <div class="sch-detail-header">
            <div class="sch-detail-summery">
              <span>Case Name:
                <strong> {{detail.name}}</strong>
              </span>
              <span>Type:
                <strong> {{detail.type}}</strong>
              </span>
            </div>
            <div>
              <el-button>
                <i class="fa fa-trash-o" aria-hidden="true"></i> Delete</el-button>
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
    <div>
      <el-dialog title="Create Case Template" :visible.sync="dialogCreateCaseTemplate">
        <el-form :inline="true" :model="createCaseForm" :rules="rules" ref="createCaseForm" label-width="6rem">
          <el-form-item label="Name:" prop="name">
            <el-input v-model="createCaseForm.name"></el-input>
          </el-form-item>
          <el-form-item label="Type:" prop="type">
            <el-select v-model="createCaseForm.type" placeholder="select type">
              <el-option label="test case" value="test case"></el-option>
              <el-option label="auxiliary tool" value="auxiliary tool"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Creator:" prop="creator">
            <el-input v-model="createCaseForm.creator"></el-input>
          </el-form-item>
          <el-form-item label="Description:" prop="desc">
            <el-input v-model="createCaseForm.desc"></el-input>
          </el-form-item>
          <div class="sch-source">
            <big>
              <strong>
                <span>Source: </span>
              </strong>
            </big>
          </div>
          <el-form-item label="Binary Name:" prop="binary_name">
            <el-input v-model="createCaseForm.binary_name"></el-input>
          </el-form-item>
          <el-form-item label="Source Type:" prop="source_type">
            <el-select v-model="createCaseForm.source_type" placeholder="select source type">
              <el-option label="git" value="git"></el-option>
              <el-option label="binary" value="binary"></el-option>
              <el-option label="docker" value="docker"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Source URL:" prop="source_url">
            <el-input v-model="createCaseForm.sourc_url"></el-input>
          </el-form-item>
          <el-form-item label="Git Value:" prop="git_vaule">
            <el-input v-model="createCaseForm.git_value"></el-input>
          </el-form-item>
          <el-form-item label="Arg:" prop="arg">
            <el-input v-model="createCaseForm.arg"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogCreateCaseTemplate = false">Cancel</el-button>
          <el-button type="primary" @click="submitForm('createCaseForm')">OK</el-button>
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

    name: 'cases',

    data() {
      return {
        activeNames: ['1'],
        isShow: false,
        detail: '',
        caseCount: 0,
        tableData: {
          label: ["Name", "Creator", "Create Time", "Type"],
          prop: ["name", "creator", "create_time", "type"],
          list: [{
            id: '',
            name: '',
            creator: '',
            create_time: '',
            type: ''
          }],

          handleClick: function (row) {
            ajax.getCaseTemplateByName(row.name).then((result) => {
              this.detail = result.data;
              this.isShow = true;
            }).catch(() => {})
          }.bind(this)
        },

        dialogCreateCaseTemplate: false,
        createCaseForm: {
          name: '',
          creator: '',
          type: '',
          desc: '',
          binary_name: '',
          source_type: '',
          source_url: '',
          git_value: '',
          arg: ''
        },

        rules: {
          name: [{
              required: true,
              message: 'Please input name',
              trigger: 'blur'
            },
            {
              min: 1,
              max: 64,
              message: 'Length should be 1 to 64',
              trigger: 'blur'
            }
          ],
          type: [{
            required: true,
            message: 'Please select type',
            trigger: 'change'
          }],
          desc: [{
            required: true,
            message: 'Please input description',
            trigger: 'blur'
          }],
          creator: [{
              required: true,
              message: 'Please input creator',
              trigger: 'blur'
            },
            {
              min: 1,
              max: 64,
              message: 'Length should be 1 to 64',
              trigger: 'blur'
            }
          ],
          binary_name: [{
              required: true,
              message: 'Please input binary name',
              trigger: 'blur'
            },
            {
              min: 1,
              max: 64,
              message: 'Length should be 1 to 64',
              trigger: 'blur'
            }
          ],
          source_type: [{
            required: true,
            message: 'Please select source type',
            trigger: 'change'
          }]
        }
      }
    },

    created() {
      ajax.getCasesTemplate().then((result) => {
        this.tableData.list = result.data.list;
        this.caseCount = this.tableData.list.length;
      }).catch(() => {})
      this.tableData.list = null;
    },

    methods: {
      createCaseTemplate: function () {
        ajax.createCaseTemplate({
          name: this.createCaseForm.name,
          creator: this.createCaseForm.creator,
          type: this.createCaseForm.type,
          desc: this.createCaseForm.desc,
          arg: this.createCaseForm.arg,
          source: {
              binary_name:this.createCaseForm.binary_name, 
              type: this.createCaseForm.source_type, 
              url:this.createCaseForm.source_url,
              git_value:this.createCaseForm.git_value
          }
        }).then((result) => {
            console.log(result)
        }).catch(() => {

        })
      },

      submitForm: function (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.createCaseTemplate()
            alert('submit!');

          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }

</script>
<style lang="scss">
  .sch-source {
    margin-left: 1rem;
    margin-bottom: 1rem;
  }

</style>
