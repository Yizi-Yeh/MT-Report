import mongoose from 'mongoose'

const Schema = mongoose.Schema

const userDetailSchema = new Schema({
  p_id: {
    type: mongoose.ObjectId,
    ref: 'users'
  },
  name: {
    type: String,
    required: [true, '請輸入會員姓名']
  },
  insuranceName: {
    type: String,
    required: [true, '請輸入登山保險用本名']
  },
  lineId: {
    type: Number,
    required: [true, '請輸入LINE ID']
  },
  lineName: {
    type: Number,
    required: [true, '請輸入LINE 名稱']
  },
  gender: {
    type: Number,
    required: [true, '請輸入性別']
  },
  birth: {
    type: Number,
    required: [true, '請輸入出生年月日']
  },
  country: {
    type: String,
    required: [true, '請輸入國籍']
  },
  blood: {
    type: Number,
    required: [true, '請輸入血型']
  },
  identityNumber: {
    type: Number,
    required: [true, '請輸入身分證字號']
  },
  cellNumber: {
    type: Number,
    required: [true, '請輸入手機']
  },
  emil: {
    type: Number,
    required: [true, '請輸入電子信箱']
  },
  address: {
    type: Number,
    required: [true, '請輸入戶籍地址']
  },
  emergency: {
    type: Number,
    required: [true, '請輸入緊急聯絡人']
  },
  emergeRelationship: {
    type: Number,
    required: [true, '請輸入緊急聯絡人關係']
  },
  eatingHabits: {
    type: Number,
    required: [true, '請輸入飲食習慣']
  },
  remainNumber: {
    type: Number,
    required: [true, '請輸入重大疾病']
  },
  climbExperience: {
    type: Number,
    required: [true, '請輸入登山經驗']
  },
  paidprice: {
    type: String,
    required: [true, '請輸入匯款金額']
  },
  paidate: {
    type: Number,
    required: [true, '請輸入匯款日期']
  }
},
{
  versionKey: false
}
)

const userdetails = mongoose.model('userdetails', userDetailSchema)

export default userdetails
