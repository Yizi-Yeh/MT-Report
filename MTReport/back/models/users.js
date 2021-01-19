import mongoose from 'mongoose'
import util from 'util'

const Schema = mongoose.Schema

const orderSchema = new Schema(
  {
    p_id: {
      type: mongoose.ObjectId,
      ref: 'newplans'
    },
    price: {
      type: String
    },
    paidprice: {
      type: String
    },
    paidate: {
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

users.findById('6006948c33f9c92c14f9b5d7', 'order').populate('60067cff98dd333ff8255b7d')
  .then(result => {
    console.log(util.inspect(result, { showHidden: true, depth: null }))
  }).catch(error => {
    console.log(error)
  })
