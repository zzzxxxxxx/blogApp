<template>
  <!-- bidirectional data binding（双向数据绑定） -->
  <div class="quill-editor"
       v-model="content"
       v-quill:myQuillEditor="editorOption"
       @change="onEditorChange($event)">
  </div>
</template>

<script>
  export default {
    props: ['childContent'],
    data() {
      return {
        content: this.childContent,
        editorOption: {
          modules:{
            toolbar:[
              //加粗、斜体、下划线、删除线、图片、视频、清除样式
              ['bold', 'italic', 'underline', 'strike', 'image', 'video', 'clean'],
              //引用、代码块
              ['blockquote', 'code-block'],
              //字体颜色、背景颜色、字体样式、对齐方式
              [{ 'color': [] }, { 'background': [] }, { 'font': [] },{ 'align': [] }],
              //字体大小、标题大小
              [{ 'size': ['small', false, 'large', 'huge'] },{ 'header': [1, 2, 3, 4, 5, 6, false] }],
              //缩进方式
              [{ 'indent': '-1'}, { 'indent': '+1' }]
            ]
          }
        }
      }
    },
    mounted() {
      console.log('this is current quill instance object', this.myQuillEditor)
    },
    methods: {
      onEditorChange(event) {
        this.$emit('handleChildChange', this.content)
      }
    },
    // Omit the same parts as in the following component sample code
    // ...
  }
</script>
