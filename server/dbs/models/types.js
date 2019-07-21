import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const TypesSchema = new Schema({
  typesName: {
    type: String,
    require: true
  },
  explain: {
    type: String,
    require: true
  }
})
export default mongoose.model('Types', TypesSchema);
