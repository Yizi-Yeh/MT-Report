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
    type: String,
    required: [true, '請確認是否上架']
  },
  totalNumber: {
    type: Number,
    required: [true, '請輸入開團人數']
  },
  participants: {
    // 報名人數
    type: Number
  },
  remainNumber: {
    // 尚餘人數
    type: Number
  },
  is_closed: {
    // 募集狀況
    type: String
  }
},
{
  versionKey: false
}
)

const newplans = mongoose.model('newplans', newPlanSchema)

export default newplans
