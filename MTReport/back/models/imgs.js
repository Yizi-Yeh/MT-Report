import mongoose from 'mongoose'

const Schema = mongoose.Schema

const imgSchema = new Schema(
  {
  // 與行程model關聯
    p_id: {
      type: mongoose.ObjectId,
      ref: 'products'
    },
    description: {
      type: String,
      required: [true, '請輸入活動圖片說明']
    },
    file: {
      type: String
    },
    imgUrl: {
      type: String
    }
  },
  {
    versionKey: false
  }
)

const imgs = mongoose.model('imgs', imgSchema)

export default imgs
