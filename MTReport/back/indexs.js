import users from '../back/models/users.js'
import util from 'util'

users.findByIdAndUpdate('6008cbc9b76fa611b4aa8dd2',
  {
    // 新增到使用者的訂單陣列
    $push: {
      order: {
        p_id: '60067cff98dd333ff8255b7d'
      }
    }
  }, { new: true }
).then(result => {
  console.log(util.inspect(result, { showHidden: true, depth: null }))
}).catch(error => {
  console.log(error)
})
