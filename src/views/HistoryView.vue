<template>
  <div>
    <div class="card">
      <el-card class="box-card">
        <div class="sch-search">
          <el-form :model="filterForm" ref="filterForm">
            <el-input v-for="(filter, index) in filterForm.filters " :key="filter.key" placeholder="Please input " v-model="filter.value"
              class="input-with-select">
              <el-select v-model="filter.name" slot="prepend" placeholder="Select">
                <el-option label="PD Version" value="pd"></el-option>
                <el-option label="TiDB Version" value="tidb"></el-option>
                <el-option label="TiKV Version" value="tikv"></el-option>
              </el-select>
              <el-button slot="append" v-if="index === 0" @click="searchHistory">
                <i class="fa fa-search" aria-hidden="true"></i>
              </el-button>
              <el-button slot="append" v-else @click="removeFilter(filter)">
                <i class="fa fa-times" aria-hidden="true"></i>
              </el-button>
            </el-input>
          </el-form>
        </div>
        <div class="sch-card-header">
          <div>
            <Strong>
              <span>Count: {{missionCount}}</span>
            </Strong>
          </div>
          <div>
            <el-button @click="addFilter">New Filter</el-button>
          </div>
        </div>
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
  import ajax from '../request/index'

  export default {
    components: {
      shTable
    },

    name: "history",

    data() {
      return {
        missionCount: 0,
        activeNames: ['1'],
        isShow: false,
        detail: '',
        tableData: {
          label: ['Mission', 'Status', 'Start Time'],
          prop: ['name', 'status', 'start_time'],
          list: [],

          handleClick: function (row) {
            if (row == null) {
              return 
            }
            ajax.getMissionByID(row.id).then((result) => {
              this.detail = result.data;
              this.isShow = true;
            }).catch(() => {})
          }.bind(this)
        },

        filterForm: {
          filters: [{
            name: '',
            value: '',
            key: Date.now()
          }]
        }
      }
    },

    created() {
      ajax.getMissions().then((result) => {
        this.tableData.list = result.data.list;
        this.missionCount = this.tableData.list.length;
      }).catch(() => {})
    },

    methods: {
      addFilter: function () {
        this.filterForm.filters.push({
          key: Date.now(),
          name: '',
          value: ''
        })
      },

      removeFilter: function (item) {
        var index = this.filterForm.filters.indexOf(item)
        if (index !== -1) {
          this.filterForm.filters.splice(index, 1)
        }
      },

      searchHistory: function () {
        var pd = '';
        var tidb = '';
        var tikv = '';
        this.filterForm.filters.forEach(function (e) {
          switch (e.name) {
            case "pd":
              pd = e.value;
              break;
            case "tidb":
              tidb = e.value;
              break;
            case "tikv":
              tikv = e.value
              break
            default:
              break;
          }
        }, this);

        ajax.searchMission({
          pd: pd,
          tidb: tidb,
          tikv: tikv
        }).then((result) => {
          this.tableData.list = result.data.list;
          this.missionCount = this.tableData.list.length;
          // this.$refs.singleTable.setCurrentRow();
          this.detail = '';
          this.isShow = false;
        }).catch(() => {})
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

</style>
