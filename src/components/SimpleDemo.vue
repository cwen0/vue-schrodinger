<template>
  <li>{{ todo.text }}</li>
</template>

<script>

export default {
  name: 'side-menu',
  props: ['todo'],
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
