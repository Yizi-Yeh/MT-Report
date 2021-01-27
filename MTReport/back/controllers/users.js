import md5 from 'md5'
// import newplans from '../models/newplans.js'
import users from '../models/users.js'

export const create = async (req, res) => {
  if (!req.headers['content-type'] || !req.headers['content-type'].includes('application/json')) {
    res.status(400).send({ success: false, message: '資料格式不符' })
    return
  }

  try {
    if (req.body.password.length < 4) {
      res.status(400).send({ success: false, message: '密碼必須四個字以上' })
    } else if (req.body.password.length > 20) {
      res.status(400).send({ success: false, message: '密碼必須二十個字以下' })
    } else {
      // post 資料
      await users.create({
        account: req.body.account,
        password: md5(req.body.password)
      })
      res.status(200).send({ success: true, message: '' })
    }
  } catch (error) {
    console.log(error)
    if (error.name === 'ValidationError') {
      const key = Object.keys(error.errors)[0]
      const message = error.errors[key].message
      res.status(400).send({ success: false, message })
    } else {
      res.status(500)
      res.send({ success: false, message: '伺服器錯誤' })
    }
  }
}
export const login = async (req, res) => {
  if (!req.headers['content-type'] || !req.headers['content-type'].includes('application/json')) {
    res.status(400).send({ success: false, message: '資料格式不符' })
    return
  }
  try {
    // findine 確認登入
    const result = await users.findOne({
      account: req.body.account,
      password: md5(req.body.password)
    })

    if (result === null) {
      console.log(result.length)
      res.status(404).send({ success: false, message: '帳號或密碼錯誤' })
    } else {
      console.log(req)
      req.session.user = result
      res.status(200).send({ success: true, message: '', result })
    }
  } catch (error) {
    if (error.name === 'ValidationError') {
      const key = Object.keys(error.errors)[0]
      const message = error.errors[key].message
      res.status(400).send({ success: false, message })
    } else {
      res.status(500).send({ success: false, message: '伺服器錯誤' })
    }
  }
}

export const logout = async (req, res) => {
  // logout 將session刪除
  req.session.destroy(error => {
    if (error) {
      res.status(500).send({ success: false, message: '伺服器錯誤' })
    } else {
      // logout 將cookie刪除
      res.clearCookie()
      res.status(200).send({ success: true, message: '' })
    }
  })
}
// 利用heartbeat 確認使用者是否登入
export const heartbeat = async (req, res) => {
  let isLogin = false
  if (req.session.user !== undefined) {
    isLogin = true
  }
  res.status(200).send(isLogin)
}

export const searchUsers = async (req, res) => {
  try {
    const result = await users.find()
    if (result.length > 0) {
      res.status(200)
      res.send({ success: true, message: '', result })
    } else {
      res.status(404)
      res.send({ success: false, message: '找不到' })
    }
  } catch (error) {
    res.status(500).send({ success: false, message: '伺服器錯誤' })
    console.log(error)
  }
}

export const searchUsersOrders = async (req, res) => {
  try {
    const result = await users.findById((req.params.id), 'order').populate('order.p_id')
    if (result !== undefined) {
      res.status(200)
      res.send({ success: true, message: '', result })
    } else {
      res.status(404)
      res.send({ success: false, message: '找不到' })
    }
  } catch (error) {
    if (error.name === 'CastError') {
      res.status(400).send({ success: false, message: 'ID 格式錯誤' })
    } else {
      res.status(500).send({ success: false, message: '伺服器錯誤' })
      console.log(error)
    }
  }
}

export const createOrder = async (req, res) => {
  try {
    if (!req.session.user) return res.status(401).send({ success: false, message: '未登入' })

    const result = await users.findByIdAndUpdate(req.params.id,
      {
        $push: {
          order: {
            p_id: req.body.p_id,
            date: req.body.date,
            price: req.body.price
          }
        }
      },
      { new: true }
    )
    res.status(200).send({ success: true, message: '已新增訂單', result })
  } catch (error) {
    res.status(500).send({ success: false, message: '伺服器錯誤' })
    console.log(error)
  }
}
