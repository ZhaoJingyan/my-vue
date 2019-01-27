<template>
  <div id="app" class="layout">
    <Framework></Framework>
  </div>
</template>

<script>
import Framework from '@/components/Framework.vue'

export default {
  name: 'App',
  components:{
    Framework
  }
}
</script>

<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
</style>
