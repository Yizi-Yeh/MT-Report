import products from '../models/products.js'

export const uploadProduct = async (req, res) => {
  // session中若有user資料才代表有登入
  if (req.session.user === undefined) {
    res.status(401).send({ succuss: false, message: '未登入' })
    return
  }
  if (!req.headers['content-type'] || !req.headers['content-type'].includes('application/json')) {
    res.status(400).send({ success: false, message: '資料格式不符' })
    return
  }
  try {
    const result = await products.create({
      category: req.body.category,
      title: req.body.title,
      site: req.body.site,
      cost: req.body.cost,
      introduction: req.body.introduction,
      
      costinclude: req.body.costinclude,
      attention: req.body.attention,
      is_enabled: req.body.is_enabled
    })
    res.status(200).send({ succuss: true, message: '', result })
  } catch (error) {
    if (error.name === 'ValidationError') {
      const key = Object.keys(error.errors)[0]
      const message = error.errors[key].message
      res.status(400).send({ success: false, message })
    } else {
      res.status(500)
      res.send({ success: false, message: '伺服器錯誤' })
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
  }
}

export const deleteeProduct = async (req, res) => {
  if (req.session.user === undefined) {
    res.status(401).send({ success: false, message: '未登入' })
    return
  }

  try {
    let result = await products.findById(req.params.id)
    if (result === null) {
      res.status(404).send({ success: false, message: '找不到資料' })
    } else if (result.user !== req.session.user._id) {
      res.status(403).send({ success: false, message: '沒有權限' })
    } else {
      result = await products.findByIdAndDelete(req.params.id)
      res.status(200).send({ success: true, message: '', result })
    }
  } catch (error) {
    if (error.name === 'CastError') {
      res.status(400).send({ success: false, message: 'ID 格式錯誤' })
    } else {
      res.status(500).send({ success: false, message: '伺服器錯誤' })
    }
  }
}

export const searchProduct = async (req, res) => {
  if (req.session.user === undefined) {
    res.status(401).send({ success: false, message: '未登入' })
    return
  }
  if (req.session.user._id !== req.params.user) {
    res.status(403).send({ success: false, message: '沒有權限' })
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
