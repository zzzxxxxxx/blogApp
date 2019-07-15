import Router from 'koa-router'
import Article from '../dbs/models/article'
import axios from './utils/axios'

let router = new Router({
  prefix: '/manager'
})
//文章列表
router.post('/listArticle', async (ctx) => {

})
//增加文章
router.post('/addArticle', async (ctx) => {
  let nowTime = getTime();
  //对象的解构赋值
  let {title, content, author, articleType, time=nowTime} = ctx.request.body;
  //判断文章是否存在
  let articleNum = await Article.find({title})
  if(articleNum.length) {
    ctx.body = {
      code: -1,
      msg: '该标题已经存在，换一个试试呗'
    }
    return
  }
  // 存储
  let narticle = await Article.create({title,content, author, articleType, time});
  if(narticle) {
    console.log('文章添加成功啦')
  }
})
//修改文章
router.post('/updateArticle', async (ctx) => {

})
//删除文章
router.post('/delArticle', async (ctx) => {

})
//获取时间函数
function getTime() {
  let date = new Date();
	let seperator1 = "-";
	let seperator2 = ":";
	let month = date.getMonth() + 1<10? "0"+(date.getMonth() + 1):date.getMonth() + 1;
	let strDate = date.getDate()<10? "0" + date.getDate():date.getDate();
	let currentdate = date.getFullYear() + seperator1  + month  + seperator1  + strDate
			+ " "  + date.getHours()  + seperator2  + date.getMinutes()
			+ seperator2 + date.getSeconds();
  return currentdate;
}

export default router
