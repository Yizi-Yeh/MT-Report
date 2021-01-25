import mongoose from 'mongoose'

const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId

ObjectId.prototype.valueOf = function () {
  return this.toString()
}

const orderSchema = new Schema(
  {
    p_id: {
      type: mongoose.ObjectId,
      ref: 'newplans'
    },
    orderDate: {
      type: Date, default: Date.now()
    },
    price: {
      type: Number
    }
  }
)

const userSchema = new Schema(
  {
    account: {
      type: String,
      minlength: [4, '帳號必須四個字以上'],
      maxlength: [20, '帳號必須二十個字以下'],
      unique: true,
      required: '帳號必須'
    },
    password: {
      type: String,
      required: [true, '請輸入密碼']
    },
    order: {
      type: [orderSchema]
      // required: [true, '請輸入訂單']
    }
  },
  {
    versionKey: false
  }
)

const users = mongoose.model('users', userSchema)

export default users
