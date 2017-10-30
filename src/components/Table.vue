<<template>
    <el-table
         ref="singleTable"
         :data="tableData"
         highlight-current-row
         @current-change="handleCurrentChange"
         style="width: 100%">
         <el-table-column
           prop="name"
           label="Mission"
           width="180">
         </el-table-column>
         <el-table-column
           prop="status"
           label="Status"
           width="180">
         </el-table-column>
         <el-table-column
           prop="start_time"
           label="Start time">
         </el-table-column>
      </el-table> 
</template>
<script>
export default {
  name: 'my-table',
  props:['table-data'],
  data() {
     return {
       tableData: [table-data]
     }
   },
  methods: {
         setCurrent(row) {
           this.$refs.singleTable.setCurrentRow(row);
         },
         handleCurrentChange(val) {
           this.currentRow = val;
         }
    }
}
</script>
