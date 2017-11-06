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
            <el-button @click="clickCreateSenceTemplate()">New</el-button>
          </div>
        </div>
        <sh-table :tableData="tableData"></sh-table>
      </el-card>
    </div>
    <div>
      <div v-show="isShow" class="sch-detail">
        <el-collapse v-model="activeNames">
          <el-collapse-item title="Case Template Detail" name="1">
            <div class="sch-detail-header">
              <div class="sch-detail-summery">
                <span>Sence Name:
                  <strong> {{detail.name || ''}}</strong>
                </span>
              </div>
              <div>
                <!-- <el-button @click="clickDeleteClusterTemplate()">
                  <i class="fa fa-trash-o" aria-hidden="true"></i> Delete</el-button>
                <el-button @click="clickUpdateClusterTemplate()">
                  <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</el-button> -->
              </div>
            </div>
            <div class="sch-detail-body">
              <pre>{{detail}}</pre>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
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
        tableData: {
          label: ["Name", "Creator", "Create Time", "Boxes Count"],
          prop: ["name", "creator", "create_time", "boxes_count"],
          list: [],

          handleClick: function (row) {
            ajax.getSenceByName(row.name).then((result) => {
              this.detail = result.data;
              this.isShow = true;
            }).catch(() => {})
          }.bind(this)
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
    },

    methods: {
      clickCreateSenceTemplate: function () {

        return;
      }
    }
  }

</script>
