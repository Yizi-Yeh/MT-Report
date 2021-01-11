import multer from 'multer'
import FTPStorage from 'multer-ftp'
import axios from 'axios'
import path from 'path'
// fs node.js對檔案處理的套件
import fs from 'fs'
import dotenv from 'dotenv'
dotenv.config()

let storage

// 本機開發，檔案存電腦
// 雲端環境，檔案存 FTP
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
    // FTP 登入設定
    ftp: {
      host: process.env.FTP_HOST,
      user: process.env.FTP_USER,
      password: process.env.FTP_PASSWORD,
      secure: false
    },
    // 上傳的路徑含檔名
    // 路徑為 FTP 的絕對路徑
    destination (req, file, options, callback) {
      callback(null, '/' + Date.now() + path.extname(file.originalname))
    }
  })
}

export const upload = multer({
  storage,
  fileFilter (req, file, callback) {
    if (!file.mimetype.includes('file')) {
      callback(new multer.MulterError('LIMIT_FORMAT'), false)
    } else {
      callback(null, true)
    }
  },
  limits: {
    fileSize: 1024 * 1024 * 5
  }
})

export const imgUpload = async (req, res) => {
  return new Promise((resolve, reject) => {
    upload.single('file')(req, res, (err) => {
      if (err !== undefined) { return reject(err) }
      resolve(req)
    })
  })
}

export const file = (req, res) => {
  // 開發環境回傳本機圖片
  if (process.env.DEV === 'true') {
  // 檢察檔案是否存在
  // process.cwd() node.js目前的路徑
    const path = process.cwd() + '/images/' + req.params.file
    // 若存在，傳送檔案
    const exists = fs.existsSync(path)
    if (exists) {
    // 將檔案送出（傳給前台，前提為絕對路徑）
      res.status(200).sendFile(path)
    } else {
      res.status(404).send({ success: false, message: '找不到圖片' })
    }
  } else {
    axios({
      method: 'GET',
      url: 'http://' + process.env.FTP_HOST + '/' + process.env.FTP_USER + '/' + req.params.file,
      responseType: 'stream'
    }).then(res => {
      res.data.pipe(res)
    }).catch(error => {
      res.status(error.response.status).send({ success: false, message: '取得圖片失敗' })
    })
  }
}
