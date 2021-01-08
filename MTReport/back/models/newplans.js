import mongoose from 'mongoose'

const Schema = mongoose.Schema

const newPlanSchema = new Schema({
  p_id: {
    type: mongoose.ObjectId,
    ref: 'products'
  },
  date: {
    type: String,
    required: [true, '請輸入開團日程']
  },
  price: {
    type: String,
    required: [true, '請輸入上架金額']
  },
  is_enabled: {
    type: Number,
    required: [true, '請確認是否上架']
 },
      totalNumber: {
        type: Number,
        required: [true, '請輸入開團人數']
      },
      participants: {
        type: Number,
        required: [true, '請輸入報名人數']
      },
      remainNumber: {
        type: Number,
        required: [true, '請輸入尚餘人數']
      },
      status: {
          type: String,
        required: [true, '請輸入募集狀況']
      }
    },
      {
        versionKey: false
        }
    )

const newplans = mongoose.model('newplans', newPlanSchema)

export default newplans
