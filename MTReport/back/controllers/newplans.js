import newplans from '../models/newplans.js'
import products from '../models/products.js'

export const addToNewPlans = async (req, res) => {
  try {
    // req.body.p_id = products._id
    const result = await newplans.create({
      p_id: req.body.p_id,
      date: req.body.date,
      price: req.body.price,
      is_enabled: req.body.is_enabled,
      totalNumber: req.body.totalNumber,
      currentNumber: req.body.currentNumber,
      remainNumber: req.body.remainNumber,
      is_closed: req.body.is_closed
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

export const getIdToNewPlans = async (req, res) => {
  try {
    const result = await newplans.findByIdAndUpdate(req.params.id,
      { $push: { p_id: products._id } },
      { new: true }
    )
    if (!result) return res.status(404).send({ success: false, message: '找不到行程' })

    res.status(200).send({ success: true, message: '', result })
  } catch (error) {
    console.log(error)
    if (error.name === 'CastError') {
      res.status(404).send({ success: false, message: '找不到行程' })
    } else {
      res.status(500).send({ success: false, message: '發生錯誤' })
    }
  }
}

export const editNewPlans = async (req, res) => {
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
      console.log(error)
      res.status(400).send({ success: false, message: '格式錯誤' })
    } else {
      res.status(500).send({ success: false, message: '伺服器錯誤' })
    }
  }
}

export const deleteNewPlans = async (req, res) => {
  try {
    const result = await newplans.findByIdAndDelete(req.params.id)
    if (result != null) {
      res.status(200).send({ success: true, message: '' })
    } else {
      res.status(404).send({ success: false, message: '找不到行程' })
    }
  } catch (error) {
    console.log(error)
    if (error.name === 'CastError') {
      res.status(404).send({ success: false, message: '找不到行程' })
    } else {
      res.status(500).send({ success: false, message: '發生錯誤' })
    }
  }
}
export const searchNewPlans = async (req, res) => {
  try {
    const result = await newplans.find().populate('p_id')
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
  try {
    const result = await newplans.findById(req.params.id).populate('p_id')
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
      res.status(400).send({ success: false, message: '格式錯誤' })
    }console.log(error)
  }
}

export const addNum = async (req, res) => {
  try {
    let result = await newplans.findById(req.params.id)
    if (result === null) {
      res.status(404).send({ success: false, message: '找不到資料' })
    } else {
      result = await newplans.findByIdAndUpdate(req.params.id,
        {
          $inc: {
            currentNumber: 1
          }
        }
        , { new: true })
      res.status(200).send({ success: true, message: '', result })
    }
  } catch (error) {
    if (error.name === 'ValidationError') {
      const key = Object.keys(error.errors)[0]
      const message = error.errors[key].message
      res.status(400).send({ success: false, message })
    } else if (error.name === 'CastError') {
      res.status(400).send({ success: false, message: '格式錯誤' })
    } else {
      res.status(500).send({ success: false, message: '伺服器錯誤' })
    }
    console.log(error)
  }
}
