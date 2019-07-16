<template>
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
</template>
<script>
export default {
  name: "",
  layout: 'backstage',
  data: function() {
    return {
      // tableData: [{
      //   time: '2016-05-02',
      //   title: '这是一个标题',
      //   author: '柒夜',
      //   category: 'javascript'
      // }],
      tableData: []
    }
  },
  methods: {
    handleEdit: function(index, row)  {
      console.log(index, row)
    },
    handleDelete: function(index, row) {
      console.log(index, row)
    }
  },
  async asyncData(ctx) {
    let {data} = await ctx.$axios.get('/manager/listArticle')
    console.log(data.result)
    return {
      tableData: data.result
    }
  }
}
</script>
<style lang="scss">
@import '@/assets/css/backstage/list.scss';
</style>
