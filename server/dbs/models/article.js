import mongoose from 'mongoose';
const Schema = mongoose.Schema
const ArticleSchema = new Schema({
  title: {
    type: String,
    require: true
  },
  content: {
    type: String,
    require: true
  },
  author: {
    type: String,
    require: true
  },
  articleType: {
    type: String,
    require: true
  },
  time: {
    type: Date,
    require: true
  }
})
export default mongoose.model('Article', ArticleSchema)
