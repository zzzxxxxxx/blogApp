<template>
  <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="title"
      label="文章标题"
      width="180">
    </el-table-column>
    <el-table-column
      prop="abstract"
      label="摘要">
    </el-table-column>
    <el-table-column
      prop="author"
      label="作者"
      width="100">
    </el-table-column>
    <el-table-column
      prop="category"
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
</template>
<script>
export default {
  name: "",
  layout: 'backstage',
  data: function() {
    return {
      tableData: [{
        date: '2016-05-02',
        title: '这是一个标题',
        abstract: '门前冷落鞍马稀',
        author: '柒夜',
        category: 'javascript'
      }, {
        date: '2016-05-04',
        title: '这是一个标题',
        abstract: '上海市普陀区金沙江路 1517 弄',
        author: '柒夜',
        category: 'javascript'
      }, {
        date: '2016-05-01',
        title: '这是一个标题',
        abstract: '上海市普陀区金沙江路 1519 弄',
        author: '柒夜',
        category: 'javascript'
      }, {
        date: '2016-05-03',
        title: '王小虎',
        abstract: '上海市普陀区金沙江路 1516 弄',
        author: '柒夜',
        category: 'javascript'
      }]
    }
  },
  methods: {
    handleEdit: function(index, row)  {
      console.log(index, row)
    },
    handleDelete: function(index, row) {
      console.log(index, row)
    }
  }
}
</script>
<style lang="scss">
@import '@/assets/css/backstage/list.scss';
</style>
