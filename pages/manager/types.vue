<template>
  <div class="manager-types">
    <h4 class="types-title">添加文章类型</h4>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="类型名称">
        <el-input v-model="form.name" class="iptWidth"></el-input>
      </el-form-item>
      <el-form-item label="类型说明">
        <el-input v-model="form.explain" class="iptWidth"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "",
  layout: 'backstage',
  data: function() {
    return {
      form: {
        name: '',
        explain: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.$axios.post('/types/add', {
        typesName: this.form.name,
        explain: this.form.explain
      }).then(({status, data}) => {
        if(status === 200) {
          if(data && data.code === 0) {
            console.log('添加成功')
          }
        }else {
          console.log(`服务器错误${status}`)
        }
      })
    }
  }
}
</script>
<style lang="scss">
@import '@/assets/css/backstage/types.scss';
</style>
