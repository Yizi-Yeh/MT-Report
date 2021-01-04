import mongoose from 'mongoose'

const Schema = mongoose.Schema

const productSchema = new Schema(
  {
    category: {
      type: String,
      required: [true, '請輸入分類']
    },
    content: {
      type: String,
      required: [true, '請輸入內容']
    },
    description: {
      type: String,
      required: [true, '請輸入描述']
    },
    imageUrl: {
      type: String,
      required: [true, '請上傳照片']
    },
    price: {
      type: Number,
      required: [true, '請輸入價格']
    },
    title: {
      type: String,
      required: [true, '請輸入標題']
    },
    messages: []
  },
  {
    versionKey: false
  }
)

const products = mongoose.model('products', productSchema)

export default products
