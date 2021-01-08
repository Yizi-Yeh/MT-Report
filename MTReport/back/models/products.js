import mongoose from 'mongoose'

const Schema = mongoose.Schema

// 活動圖片schema
// 改為upload形式
const imgSchema = new Schema(
  {
    description: {
      type: String
    },
    file: {
      type: String
    },
    imgUrl: {
      type: String
    }
  }
)

// 行程安排schema
const scheduleSchema = new Schema(
  {
    date: {
      type: String
    // required: [true, '請輸入行程安排日程']
    },
    content: {
      type: String
      // required: [true, '請輸入行程安排內容']
    }
  })

// 餐食schema
const mealSchema = new Schema({
  Date: {
    type: String
    // required: [true, '請輸入餐食安排日程']
  },
  meal: {
    type: String
    // required: [true, '請輸入餐點']
  },
  content: {
    type: String
    // required: [true, '請輸入餐食內容']
  }
})

// productSchema-----------------------------------------------------------------------------------------------------------------------------------------------------------
const productSchema = new Schema(
  {
    category: {
      type: String,
      required: [true, '請輸入活動分類']
    },
    title: {
      type: String,
      required: [true, '請輸入活動名稱']
    },
    site: {
      type: String,
      required: [true, '請輸入活動地點']
    },
    cost: {
      type: Number,
      required: [true, '請輸入活動成本']
    },
    introduction: {
      type: String,
      required: [true, '請輸入活動說明']
    },
    costinclude: {
      type: String,
      required: [true, '請輸入活動費用包含事項']
    },
    attention: {
      type: String,
      required: [true, '請輸入注意事項']
    },
    // 1 or 0
    is_enabled: {
      type: Number,
      required: [true, '請確認是否上架']
    },
    images: {
      type: [imgSchema]
      // required: [true, '請上傳活動圖片']
    },
    schedule: {
      type: [scheduleSchema]
      // required: [true, '請輸入行程安排']
    },
    meal: {
      type: [mealSchema]
      // required: [true, '請輸入餐食安排']
    },
    versionKey: false
  }
)

const products = mongoose.model('products', productSchema)

export default products
