import mongoose from 'mongoose'

const Schema = mongoose.Schema

const imgSchema = new Schema(
  {
    // 活動圖片說明
    description: {
      type: String
    },
    // 活動圖片檔案
    file: {
      type: String
    },
    // 活動圖片位置
    imgUrl: {
      type: String
    }
  }
)

const scheduleSchema = new Schema(
  {
    // 行程安排日程
    dateTime: {
      type: String
    },
    // 行程安排內容
    content: {
      type: String
    }
  })

const mealSchema = new Schema({
  mealdateTime: {
    // 餐食安排日程
    type: String
  },
  mealcontent: {
    // 餐食內容
    type: String
  }
})

const productSchema = new Schema(
  {
    // 活動分類
    category: {
      type: String
    },
    // 請輸入活動名稱
    title: {
      type: String
    },
    // 活動地點
    site: {
      type: String
    },
    // 活動成本
    cost: {
      type: String
    },
    // 活動時間
    time: {
      type: String
    },
    // 活動說明
    introduction: {
      type: String
    },
    // 費用包含事項
    costinclude: {
      type: String
    },
    // 注意事項
    attention: {
      type: String
    },
    // 是否上傳
    is_enabled: {
      type: Boolean
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
    }
  },
  {
    versionKey: false
  }
)

const products = mongoose.model('products', productSchema)

export default products
