import users from '../back/models/users.js'
import util from 'util'

// 新增使用者訂單
// users.findByIdAndUpdate('60067b7f7c1a192ef003d502',
//   {
//     新增到使用者的訂單陣列
//     $push: {
//       order: {
//         price: 5800,
//         paidprice: 5800,
//         paidate: 20200119,
//         // 報名人數++
//         newplans: [
//           {
//             p_id: '60067cff98dd333ff8255b7d',
//             currentNumber: 1
//           }
//         ]
//       }
//     }
//   }, { new: true }
// ).then(result => {
//   console.log(util.inspect(result, { showHidden: true, depth: null }))
// }).catch(error => {
//   console.log(error)
// })

// 依使用者 ID 查詢使用者訂單，將商品的資訊一併塞入訂單中
// .populate(關聯查詢連結的欄位)
// users.findById('60067b7f7c1a192ef003d502', 'order').populate('order.newplans.p_id')
//   .then(result => {
//     console.log(util.inspect(result, { showHidden: true, depth: null }))
//   }).catch(error => {
//     console.log(error)
//   })

// 新增使用者訂單

// 新增使用者訂單
// users.findByIdAndUpdate('6006948c33f9c92c14f9b5d7',
//   {
//     // 新增到使用者的訂單陣列
//     $push: {
//       order: {
//         price: 5000,
//         paidprice: 5000,
//         paidate: 20200119,
//         newplans: [
//           {
//             p_id: '60067cff98dd333ff8255b7d'
//           }
//         ]
//       }
//     }
//   }, { new: true }
// ).then(result => {
//   console.log(util.inspect(result, { showHidden: true, depth: null }))
// }).catch(error => {
//   console.log(error)
// })

users.findById('6006958bfb354a3d50472378', 'order').populate('60067cff98dd333ff8255b7d')
  .then(result => {
    console.log(util.inspect(result, { showHidden: true, depth: null }))
  }).catch(error => {
    console.log(error)
  })
