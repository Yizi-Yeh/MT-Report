import multer from 'multer'
// 圖片傳到220
import FTPStorage from 'multer-ftp'
// 透過axios 導向到herolku 再到220拿圖片 回來
import axios from 'axios'
import path from 'path'
import products from '../models/products.js'

let storage

// 本機開發，檔案存電腦
// 雲端環境，檔案存FTP
if (process.env.DEV === 'true') {
  storage = multer.diskStorage({
    destination (req, file, callback) {
      callback(null, 'images/')
    },
    filename (req, file, callback) {
      callback(null, Date.now() + path.extname(file.originalname))
    }
  })
} else {
  storage = new FTPStorage({
    // 上傳到 FTP 的路徑
    basepath: '/',
    // FTP 登入設定
    ftp: {
      host: process.env.FTP_HOST,
      user: process.env.FTP_USER,
      password: process.env.FTP_PASSWORD,
      secure: false
    },
    // 上傳的路徑含檔名
    // 路徑為 FTP的 絕對路徑
    destination (req, file, options, callback) {
      callback(null, '/' + Date.now() + path.extname(file.originalname))
    }
  })
}

const upload = multer({
  storage,
  fileFilter (req, file, callback) {
    if (!file.mimetype.includes('images')) {
      callback(new multer.MulterError('LIMIT_FORMAT'), false)
    } else {
      callback(null, true)
    }
  },
  limits: {
    // 大小限制1mb
    fileSize: 1024 * 1024
  }
})

export const uploadProduct = async (req, res) => {
  // 若未登入
  if (req.session.user === undefined) {
    res.status(401).send({ succuss: false, message: '未登入' })
    return
  }
  if (!req.headers['contetent-type'] || !req.headers['content-type'].includes('multipart/form-data')) {
    res.status(400).send({ succuss: false, message: '資料格式不符' })
  }
}

export const editProduct = async (req, res) => {

}
export const deleteeProduct = async (req, res) => {

}
export const adminuserProduct = async (req, res) => {

}
export const fileProduct = async (req, res) => {

}
