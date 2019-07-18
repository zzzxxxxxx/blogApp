<template>
<div class="backstage-add">
  <el-row>
    <h2>增加文章</h2>
  </el-row>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="文章名称" prop="name">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item label="文章分类" prop="types">
      <el-select v-model="ruleForm.types" placeholder="请选择文章分类">
        <el-option v-for="(item, index) in category" :key="item.id" :label="item.name" :value="item.name"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="作者">
      <el-input v-model="ruleForm.author"></el-input>
    </el-form-item>
    <el-form-item label="内容" prop="content">
      <vue-quill-editor @handleChildChange="handleParent"/>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="handleSubmit()">立即创建</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</div>
</template>
<script>
import VueQuillEditor from '@/components/editor/editor'
export default {
  name: "",
  layout: 'backstage',
  data: function() {
    return {
      ruleForm: {
        name: '',
        author: '',
        types: '',
        content: ''
      },
      category: [{
        id: '0001',
        name: 'javascript'
      }, {
        id: '0002',
        name: 'react'
      }],
      rules: {
        name: [
          { required: true, message: '请输入文章标题', trigger: 'blur' },
          { min: 3, max: 15, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        types: [
          { required: true, message: '请选择文章分类', trigger: 'change' }
        ],
        content: [
          { required: true}
        ]
      }
    }
  },
  components: {
    VueQuillEditor
  },
  methods: {
    handleParent(msg) {
      this.ruleForm.content = msg;
    },
    handleSubmit: function() {
      let self = this;
      self.$axios.post('/manager/addArticle', {
        title: self.ruleForm.name,
        content: self.ruleForm.content,
        author: self.ruleForm.author,
        articleType: self.ruleForm.types
      }).then(({status, data}) => {
        if(status === 200) {
          if(data && data.code === 0) {
            console.log(data.msg);
            this.$message({
              message: data.msg,
              type: 'success'
            });
            setTimeout(function() {
              location.href = '/manager/add'
            }, 1000)
          }
        }else {
          self.error = `服务器出错，错误码${status}`
        }
      })
    }
  }
}
</script>
<style lang="scss">
@import '@/assets/css/backstage/add.scss';
</style>
