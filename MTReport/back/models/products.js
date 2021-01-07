import mongoose from 'mongoose'

const Schema = mongoose.Schema

// 開團model
const newPlanSchema = new Schema({
// 與行程model關聯
  p_id: {
    type: mongoose.ObjectId,
    ref: 'products'
  },
  // 與訂單model關聯
  order_id: {
    type: mongoose.ObjectId,
    ref: 'orders'
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
})

// const imgSchema = new Schema({
//   p_id: {
//     type: mongoose.ObjectId,
//     ref: 'products'
//   },
//   description: {
//     type: String,
//     required: [true, '請輸入活動圖片說明']
//   },
//   file: {
//     type: String,
//     required: [true, '請上傳活動圖片檔案']
//   },
//   imgUrl: {
//     type: String
//   }
// })

// 行程安排model
const scheduleSchema = new Schema({
  // 與行程model關聯
  p_id: {
    type: mongoose.ObjectId,
    ref: 'products'
  },
  date: {
    type: Date,
    required: [true, '請輸入行程安排日程']
  },
  content: {
    type: String,
    required: [true, '請輸入行程安排內容']
  }
})

// 餐食model
const mealSchema = new Schema({
  // 與行程model關聯
  p_id: {
    type: mongoose.ObjectId,
    ref: 'products'
  },
  Date: {
    type: String,
    required: [true, '請輸入餐食安排日程']
  },
  meal: {
    type: String,
    required: [true, '請輸入餐點']
  },
  content: {
    type: String,
    required: [true, '請輸入餐食內容']
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
    newplan: {
      type: [newPlanSchema]
      // required: [true, '請輸入開團內容']
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
    // images: {
    //   type: [imgSchema]
    // },
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
