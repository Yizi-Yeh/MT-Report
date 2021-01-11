import products from '../models/products.js'
import path from 'path'
import { imgUpload } from '../imgupload.js'

export const uploadProduct = async (req, res) => {
  // session中若有user資料才代表有登入
  if (req.session.user === undefined) {
    res.status(401).send({ succuss: false, message: '未登入' })
    return
  }
  try {
    const reqq = await imgUpload(req, res)
    let file = ''
    if (process.env.DEV === 'true') {
      file = reqq.file.filename
    } else {
      file = path.basename(req.file.path)
    }
    const images = {
      description: reqq.body.description,
      file,
      imgUrl: reqq.body.imgUrl
    }
    const schedule = {
      dateTime: reqq.body.dateTime,
      content: reqq.body.content
    }
    const meal = {
      mealdateTime: reqq.body.mealdateTime,
      mealcontent: reqq.body.mealcontent
    }
    const result = await products.create({
      category: reqq.body.category,
      title: reqq.body.title,
      site: reqq.body.site,
      cost: reqq.body.cost,
      time: reqq.body.time,
      introduction: reqq.body.introduction,
      costinclude: reqq.body.costinclude,
      attention: reqq.body.attention,
      is_enabled: reqq.body.is_enabled,
      images: [images],
      schedule: [schedule],
      meal: [meal]
    })
    res.status(200).send({ succuss: true, message: '', result })
  } catch (error) {
    console.log(error)
    if (error.name === 'MulterError') {
      const message = (error.code === 'LIMIT_FORMAT') ? [400, '圖片格式不符'] : (error.code === 'LIMIT_SIZE') ? [400, '圖片太大'] : [500, '伺服器錯誤']
      res.status(message[0]).send({ result: 'false', message: '伺服器錯誤' })
    } else if (error.name === 'ValidationError') {
      const key = Object.keys(error.errors)[0]
      const message = error.errors[key].message
      res.status(400)
      res.send({ success: false, message })
    } else {
      res.status(500)
      res.send({ success: false, message: '伺服器發生錯誤' })
      console.log(error)
    }
  }
}

export const editProduct = async (req, res) => {
  if (req.session.user === undefined) {
    res.status(401).send({ success: false, message: '未登入' })
    return
  }
  if (!req.headers['content-type'] || !req.headers['content-type'].includes('application/json')) {
    res.status(400).send({ success: false, message: '資料格式不符' })
    return
  }

  try {
    let result = await products.findById(req.params.id)
    if (result === null) {
      res.status(404).send({ success: false, message: '找不到資料' })
    } else if (result.user !== req.session.user._id) {
      res.status(403).send({ success: false, message: '沒有權限' })
    } else {
      result = await products.findByIdAndUpdate(req.params.id, req.body, { new: true })
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
export const deleteProduct = async (req, res) => {
  try {
    const result = await products.findByIdAndDelete(req.params.id)

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
export const deleteeProduct = async (req, res) => {
  if (req.session.user === undefined) {
    res.status(401).send({ success: false, message: '未登入' })
    return
  }

  try {
    const result = await products.findByIdAndDelete(req.params.id)
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
export const searchProduct = async (req, res) => {
  if (req.session.user === undefined) {
    res.status(401).send({ success: false, message: '未登入' })
    return
  }
  try {
    const result = await products.find()
    if (result.length > 0) {
      res.status(200)
      res.send({ success: true, message: '', result })
    } else {
      res.status(404)
      res.send({ success: false, message: '找不到' })
    }
  } catch (error) {
    res.status(500).send({ success: false, message: '伺服器錯誤' })
  }
}

export const searchProductById = async (req, res) => {
  if (req.session.user === undefined) {
    res.status(401).send({ success: false, message: '未登入' })
    return
  }
  try {
    const result = await products.findById(req.params.id)
    if (result === null) {
      res.status(404).send({ success: false, message: '找不到資料' })
    } else if (result.user !== req.session.user._id) {
      res.status(403).send({ success: false, message: '沒有權限' })
    } else {
      res.status(500).send({ success: false, message: '伺服器錯誤' })
    }
  } catch (error) {
    if (error.name === 'CastError') {
      res.status(400).send({ success: false, message: 'ID 格式錯誤' })
    }
  }
}
