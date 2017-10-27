<template>
  <el-menu :router="true" mode="vertical" default-active="1" class="el-menu-vertical-demo">
    <el-menu-item-group title="Menu1">
      <el-menu-item index="/demopage"><i class="el-icon-message"></i>Demo Page</el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group title="Menu2">
      <el-menu-item index="/404"><i class="el-icon-message"></i>Not Found</el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group title="Menu2">
      <el-menu-item index="4"><i class="el-icon-message"></i>About</el-menu-item>
    </el-menu-item-group>
  </el-menu>
</template>

<script>

export default {
  name: 'side-menu',
  data () {
    return {
    }
  },
  mounted() {

  }
}
</script>

<style scoped>

</style>
