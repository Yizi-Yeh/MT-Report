import newplans from '../models/newplans.js'

export const uploadNewPlans = async (req, res) => {
  // session中若有user資料才代表有登入
  // if (req.session.user === undefined) {
  //   res.status(401).send({ succuss: false, message: '未登入' })
  //   return
  // }
  try {
    const result = await newplans.create({
      date: req.body.date,
      price: req.body.price,
      is_enabled: req.body.is_enabled,
      totalNumber: req.body.totalNumber
    })
    res.status(200).send({ succuss: true, message: '', result })
  } catch (error) {
    console.log(error)
    if (error.name === 'ValidationError') {
      const key = Object.keys(error.errors)[0]
      const message = error.errors[key].message
      res.status(400).send({ success: false, message })
    } else if (error.name === 'CastError') {
      res.status(400).send({ success: false, message: 'ID 格式錯誤' })
    } else {
      res.status(500).send({ success: false, message: '伺服器錯誤' })
    }
    console.log(error)
  }
}

export const editNewPlans = async (req, res) => {
  // if (req.session.user === undefined) {
  //   res.status(401).send({ success: false, message: '未登入' })
  //   return
  // }
  try {
    let result = await newplans.findById(req.params.id)
    if (result === null) {
      res.status(404).send({ success: false, message: '找不到資料' })
    } else {
      result = await newplans.findByIdAndUpdate(req.params.id, req.body, { new: true })
      res.status(200).send({ success: true, message: '', result })
    }
  } catch (error) {
    if (error.name === 'ValidationError') {
      const key = Object.keys(error.errors)[0]
      const message = error.errors[key].message
      res.status(400).send({ success: false, message })
    } else if (error.name === 'CastError') {
      res.status(400).send({ success: false, message: 'ID 格式錯誤' })
    } else {
      res.status(500).send({ success: false, message: '伺服器錯誤' })
    }
    console.log(error)
  }
}

export const deleteNewPlans = async (req, res) => {
  // if (req.session.user === undefined) {
  //   res.status(401).send({ success: false, message: '未登入' })
  //   return
  // } console.log(req.session.user)

  try {
    const result = await newplans.findByIdAndDelete(req.params.id)
    if (result != null) {
      res.status(200).send({ success: true, message: '' })
    } else {
      res.status(404).send({ success: false, message: '找不到商品' })
    }
  } catch (error) {
    console.log(error)
    if (error.name === 'CastError') {
      res.status(404).send({ success: false, message: '找不到商品' })
    } else {
      res.status(500).send({ success: false, message: '發生錯誤' })
    }
  }
}
export const searchNewPlans = async (req, res) => {
  // console.log(req.session)
  // if (req.session.account === undefined) {
  //   res.status(401).send({ success: false, message: '未登入' })
  //   return
  // }
  try {
    const result = await newplans.find()
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

export const searchNewPlansById = async (req, res) => {
  // if (req.session.user === undefined) {
  //   res.status(401).send({ success: false, message: '未登入' })
  //   return
  // }
  try {
    const result = await newplans.findById(req.params.id)
    console.log(result)
    if (result !== undefined) {
      res.status(200)
      res.send({ success: true, message: '', result })
    } else {
      if (result === null) {
        res.status(404).send({ success: false, message: '找不到資料' })
      } else if (result.account !== req.session.user._id) {
        res.status(403).send({ success: false, message: '沒有權限' })
      } else {
        res.status(500).send({ success: false, message: '伺服器錯誤' })
      }
    }
  } catch (error) {
    if (error.name === 'CastError') {
      res.status(400).send({ success: false, message: 'ID 格式錯誤' })
    }
  }
}
