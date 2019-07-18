<template>
  <div class="list-container">
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="time"
        label="日期"
        width="210">
      </el-table-column>
      <el-table-column
        prop="title"
        label="文章标题"
        width="180">
      </el-table-column>
      <el-table-column
        prop="author"
        label="作者"
        width="100">
      </el-table-column>
      <el-table-column
        prop="articleType"
        label="类别"
        width="180">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="文章修改" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="文章名称" :label-width="formLabelWidth">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="文章分类" :label-width="formLabelWidth">
          <el-select v-model="form.types" placeholder="请选择文章分类">
            <el-option v-for="(item, index) in category" :key="item.id" :label="item.name" :value="item.name"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="作者" :label-width="formLabelWidth">
          <el-input v-model="form.author"></el-input>
        </el-form-item>
        <el-form-item label="内容" :label-width="formLabelWidth">
          <vue-quill-editor @handleChildChange="handleParent" :childContent="form.content"/>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleSubmit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import VueQuillEditor from '@/components/editor/editor'
export default {
  name: "",
  layout: 'backstage',
  data: function() {
    return {
      tableData: [],
      form: {
        _id: '',
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
      dialogFormVisible: false,
      formLabelWidth: '100px'
    }
  },
  components: {
    VueQuillEditor
  },
  methods: {
    handleParent(msg) {
      this.form.content = msg;
    },
    handleEdit: function(index, row)  {
      console.log(index, row)
      // this.$axios.post('/manager/updateArticle')
      this.dialogFormVisible = true;
      this.form._id = row._id;
      this.form.name = row.title;
      this.form.types = row.articleType;
      this.form.content = row.content;
      this.form.author = row.author;
      // this.from.name = row.
    },
    handleDelete: function(index, row) {
      // console.log(index, row)
      let self = this;
      self.$axios.post('/manager/delArticle', {
        _id: row._id
      }).then(({status, data}) => {
        if(status == 200) {
          if(data && data.code === 0) {
            this.$message({
              message: data.msg,
              type: 'success'
            });
            setTimeout(function() {
              location.href = '/manager/list'
            }, 1000)
          }
        }else {
          self.error = `服务器出错，错误码${status}`
        }
      })
    },
    handleSubmit: function() {
      this.dialogFormVisible = false;
      let self = this;
      self.$axios.post('/manager/updateArticle', {
        _id: self.form._id,
        title: self.form.name,
        content: self.form.content,
        author: self.form.author,
        articleType: self.form.types
      }).then(({status, data}) => {
        if(status === 200) {
          if(data && data.code === 0) {
            this.$message({
              message: data.msg,
              type: 'success'
            });
            setTimeout(function() {
              location.href = '/manager/list'
            }, 1000)
          }
        }else {
          self.error = `服务器出错，错误码${status}`
        }
      })
    }
  },
  async asyncData(ctx) {
    let {data} = await ctx.$axios.get('/manager/listArticle')
    return {
      tableData: data.result
    }
  }
}
</script>
<style lang="scss">
@import '@/assets/css/backstage/list.scss';
</style>
