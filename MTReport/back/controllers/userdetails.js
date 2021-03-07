import userdetails from '../models/userdetails.js'

export const addForm = async (req, res) => {
  try {
    if (!req.session.user) return res.status(401).send({ success: false, message: '未登入' })
    const result = await userdetails.create({
      p_id: req.session.user._id,
      name: req.body.name,
      lineId: req.body.lineId,
      lineName: req.body.lineName,
      gender: req.body.gender,
      birth: req.body.birth,
      country: req.body.country,
      blood: req.body.blood,
      identityNumber: req.body.identityNumber,
      cellNumber: req.body.cellNumber,
      email: req.body.email,
      address: req.body.address,
      emergency: req.body.emergency,
      emergeRelationship: req.body.emergeRelationship,
      eatingHabits: req.body.eatingHabits,
      disease: req.body.disease,
      climbExperience: req.body.climbExperience,
      paidprice: req.body.paidprice,
      paidate: req.body.paidate,
      message: req.body.message
    })
    res.status(200).send({ succuss: true, message: '', result })
  } catch (error) {
    console.log(error)
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

export const editForm = async (req, res) => {
  try {
    let result = await userdetails.findById(req.params.id)
    if (result === null) {
      res.status(404).send({ success: false, message: '找不到資料' })
    } else {
      result = await userdetails.findByIdAndUpdate(req.params.id, req.body, { new: true })
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

export const deleteForm = async (req, res) => {
  try {
    const result = await userdetails.findByIdAndDelete(req.params.id)
    if (result != null) {
      res.status(200).send({ success: true, message: '' })
    } else {
      res.status(404).send({ success: false, message: '找不到資料' })
    }
  } catch (error) {
    console.log(error)
    if (error.name === 'CastError') {
      res.status(404).send({ success: false, message: '找不到資料' })
    } else {
      res.status(500).send({ success: false, message: '發生錯誤' })
    }
  }
}
export const searchForm = async (req, res) => {
  try {
    const result = await userdetails.find().populate('p_id')
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

export const searchFormById = async (req, res) => {
  try {
    const result = await userdetails.find({ p_id: req.session.user._id })
    console.log(result)
    if (result !== undefined) {
      res.status(200)
      res.send({ success: true, message: '', result })
    } else {
      if (result === null) {
        res.status(404).send({ success: false, message: '找不到資料' })
      } else if (result.account !== req.session.user._id) {
        res.status(403).send({ success: false, message: '未報名' })
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
