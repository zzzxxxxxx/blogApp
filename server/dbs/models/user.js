import mongoose from 'mongoose';
const Schema = mongoose.Schema
const UserSchema = new Schema({
  username: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  }
})

export default mongoose.model('User', UserSchema)
