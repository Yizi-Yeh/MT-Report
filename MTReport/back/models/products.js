import mongoose from 'mongoose'

const Schema = mongoose.Schema

const productSchema = new Schema(
  {
    plans: [{
      category: {
        type: String
      // required: [true, '請輸入分類']
      },
      content: {
        type: String
      // required: [true, '請輸入內容']
      },
      imageUrl: {
        type: String
      },
      price: {
        type: Number
      // required: [true, '請輸入價格']
      },
      file: {
        type: String,
        required: [true, '缺少檔案名稱']
      },
      user: {
        type: String,
        required: [true, '缺少使用者欄位']
      },
      description: {
        type: String,
        maxlength: [200, '說明必須 200 字以下']
      },
      title: {
        type: String
      // required: [true, '請輸入標題']
      },
      messages: []
    }]
  },
  {
    versionKey: false
  }
)

const products = mongoose.model('products', productSchema)

export default products
