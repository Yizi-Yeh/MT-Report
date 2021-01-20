import newplans from '../back/models/newplans.js'
import util from 'util'

newplans.findOneAndUpdate({'60067cff98dd333ff8255b7d'},{ newplans : { $push: { users: doc }}},
  function (error, success) {
    if (error) {
      console.log(error);
    }
    console.log(success);
  });
newplans.findByIdAndUpdate('60067cff98dd333ff8255b7d',
  {
    $push: {
      products: [
        {
          products: '5ffe437174900c2670ba50ae'
        }
      ]

    }
  }, { new: true }
).then(result => {
  console.log(util.inspect(result, { showHidden: true, depth: null }))
}).catch(error => {
  console.log(error)
})

// 依使用者 ID 查詢使用者訂單，將商品的資訊一併塞入訂單中
// .populate(關聯查詢連結的欄位)
// users.findById('60067b7f7c1a192ef003d502', 'order').populate('order.newplans.p_id')
//   .then(result => {
//     console.log(util.inspect(result, { showHidden: true, depth: null }))
//   }).catch(error => {
//     console.log(error)
//   })

// 新增使用者訂單
// newplans.findById('60067cff98dd333ff8255b7d', 'newplans').populate('5ffe437174900c2670ba50ae')
//   .then(result => {
//     console.log(util.inspect(result, { showHidden: true, depth: null }))
//   }).catch(error => {
//     console.log(error)
//   })

//     if (error) {
//       console.log(error);
//     }
//     console.log(success);
//   });
// newplans.findByIdAndUpdate('60067cff98dd333ff8255b7d',
//   {
//     $push: {
//       products: [
//         {
//           products: '5ffe437174900c2670ba50ae'
//         }
//       ]

//     }
//   }, { new: true }
// ).then(result => {
//   console.log(util.inspect(result, { showHidden: true, depth: null }))
// }).catch(error => {
//   console.log(error)
// })

newplans.findByIdAndUpdate('60067cff98dd333ff8255b7d', 'newplans').populate('5ffe437174900c2670ba50ae')
  .then(result => {
    console.log(util.inspect(result, { showHidden: true, depth: null }))
  }).catch(error => {
    console.log(error)
  })

  // 找users的id加入訂單中的開團內容
  users.findByIdAndUpdate('5fe94b3684fcf22c147d3749',
  {
    $push: {
      order: {
        newplans: [
          {
            p_id: '5fe9407e2e25b514a4636269',
          }
        ]
      }
    }
  }, {new: true}
).then(result => {
  console.log(util.inspect(result, {showHidden: true, depth: null}))
}).catch(error => {
  console.log(error)
})