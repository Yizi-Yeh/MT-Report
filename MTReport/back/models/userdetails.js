import mongoose from 'mongoose'

const Schema = mongoose.Schema

const newPlanSchema = new Schema({
  p_id: {
    type: mongoose.ObjectId,
    ref: 'users'
  },
  name: {
    type: String,
    required: [true, '請輸入會員姓名']
  },
      price: {
        type: String,
        required: [true, '請輸入登山保險用本名']
      },
      is_enabled: {
        type: Number,
        required: [true, '請輸入LINE ID']
      },
      totalNumber: {
        type: Number,
        required: [true, '請輸入LINE 名稱']
      },
      participants: {
        type: Number,
        required: [true, '請輸入性別']
      },
      remainNumber: {
        type: Number,
        required: [true, '請輸入出生年月日']
      },
      status: {
          type: String,
        required: [true, '請輸入國籍']
      },
      remainNumber: {
        type: Number,
        required: [true, '請輸入血型']
      },
      remainNumber: {
        type: Number,
        required: [true, '請輸入身分證字號']
      },
      remainNumber: {
        type: Number,
        required: [true, '請輸入手機']
      },
      remainNumber: {
        type: Number,
        required: [true, '請輸入出生年月日']
      },
      remainNumber: {
        type: Number,
        required: [true, '請輸入電子信箱']
      },
      remainNumber: {
        type: Number,
        required: [true, '請輸入戶籍地址']
      },
      remainNumber: {
        type: Number,
        required: [true, '請輸入緊急聯絡人']
      },
      remainNumber: {
        type: Number,
        required: [true, '請輸入緊急聯絡人關係']
      },
      remainNumber: {
        type: Number,
        required: [true, '請輸入飲食習慣']
      },
      remainNumber: {
        type: Number,
        required: [true, '請輸入重大疾病']
      },
      remainNumber: {
        type: Number,
        required: [true, '請輸入登山經驗']
      },
    },
      {
        versionKey: false
        }
    )

const newplans = mongoose.model('newplans', newPlanSchema)

export default newplans
