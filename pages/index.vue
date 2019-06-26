<template>
  <div class="">
    <el-row>
      <HotPlace/>
    </el-row>
    <el-row>
      <List/>
    </el-row>
  </div>
</template>

<script>
import HotPlace from '@/components/index/hotPlace.vue'
import List from '@/components/index/list.vue'
export default {
  components: {
    HotPlace,
    List
  }
}
</script>

<style>
</style>
