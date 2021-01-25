import mongoose from 'mongoose'

const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId

ObjectId.prototype.valueOf = function () {
  return this.toString()
}
const newPlanSchema = new Schema({
  p_id: {
    type: mongoose.ObjectId,
    ref: 'products'

  },
  // 開團日程
  date: {
    type: String
  },
  // 上架金額
  price: {
    type: Number
  },
  // 是否上架
  is_enabled: {
    type: Boolean
  },
  // 開團人數
  totalNumber: {
    type: Number
  },
  currentNumber: {
    // 報名人數
    type: Number
  },
  remainNumber: {
    // 尚餘人數
    type: Number
  },
  is_closed: {
    // 募集狀況
    type: Boolean
  }
},
{
  versionKey: false
}
)

const newplans = mongoose.model('newplans', newPlanSchema)

export default newplans
