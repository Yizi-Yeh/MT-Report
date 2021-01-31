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
    type: String,
    required: [true, '請輸入LINE ID']
  },
  lineName: {
    type: String,
    required: [true, '請輸入LINE 名稱']
  },
  gender: {
    type: String,
    required: [true, '請輸入性別']
  },
  birth: {
    type: String,
    required: [true, '請輸入出生年月日']
  },
  country: {
    type: String,
    required: [true, '請輸入國籍']
  },
  blood: {
    type: String,
    required: [true, '請輸入血型']
  },
  identityNumber: {
    type: String,
    required: [true, '請輸入身分證字號']
  },
  cellNumber: {
    type: String,
    required: [true, '請輸入手機']
  },
  emil: {
    type: String
    // required: [true, '請輸入電子信箱']
  },
  address: {
    type: String,
    required: [true, '請輸入戶籍地址']
  },
  emergency: {
    type: String,
    required: [true, '請輸入緊急聯絡人']
  },
  emergeRelationship: {
    type: String,
    required: [true, '請輸入緊急聯絡人關係']
  },
  eatingHabits: {
    type: String,
    required: [true, '請輸入飲食習慣']
  },
  disease: {
    type: String,
    required: [true, '請輸入重大疾病']
  },
  climbExperience: {
    type: String,
    required: [true, '請輸入登山經驗']
  },
  paidprice: {
    type: Number,
    required: [true, '請輸入匯款金額']
  },
  paidate: {
    type: String,
    required: [true, '請輸入匯款日期']
  },
  message: {
    type: String
  }
},
{
  versionKey: false
}
)

const userdetails = mongoose.model('userdetails', userDetailSchema)

export default userdetails
