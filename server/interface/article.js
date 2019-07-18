import Router from 'koa-router'
import Article from '../dbs/models/article'
import axios from './utils/axios'

let router = new Router({
  prefix: '/manager'
})
//文章列表
router.get('/listArticle', async (ctx) => {
  let result = await Article.find()
  ctx.body = {
    result
  }
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
    ctx.body = {
      code: 0,
      msg: '文章添加成功'
    }
  }
})
//修改文章
router.post('/updateArticle', async (ctx) => {
  let nowTime = getTime();
  let uploadeFile = ctx.request.body;
  uploadeFile.time = nowTime;
  // 数据库更新
  let narticle = await Article.updateOne({'_id': uploadeFile._id}, uploadeFile);
  if(narticle) {
    ctx.body = {
      code: 0,
      msg: '文章修改成功啦'
    }
  }else {
    ctx.body = {
      code: -1,
      msg: '修改文章出错啦'
    }
  }
  //
})
//删除文章
router.post('/delArticle', async (ctx) => {
  let _id = ctx.request.body;
  // mongodb删除数据
  let state = await Article.deleteOne(_id)
  .then(result =>
    // console.log(`Deleted ${result.deletedCount} item.`);
    ctx.body = {
      code: 0,
      msg: '文章删除成功'
    }
  )
  .catch(err => console.error(`Delete failed with error: ${err}`))
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
