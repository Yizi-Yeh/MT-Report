import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import connectMongo from 'connect-mongo'
import cors from 'cors'
import session from 'express-session'

import routerAdminusers from './routes/adminusers.js'
import routerProducts from './routes/products.js'

// 設置dotenv
dotenv.config()

mongoose.connect(process.env.DBURL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })

const app = express()
// express 需要bodyparser來讀取資料
app.use(bodyParser.json())

// 跨域設定
app.use(cors({
  origin (origin, callback) {
    // 如果是 Postman 之類的後端, 允許
    if (origin === undefined) {
      callback(null, true)
    } else {
      if (process.env.DEV === 'true') {
        // 如果是本機開發, 接受所有請求
        callback(null, true)
      } else if (origin.includes('github')) {
        // 如果不是本機開發, 但是是從 github 過來的請求, 允許
        callback(null, true)
      } else {
        // 如果不是本機開發, 也不是從 github 過來, 拒絕
        callback(new Error('Not allowed'), false)
      }
    }
  },
  credentials: true
}))

// 將session存入mongoDB
const MongoStore = connectMongo(session)
// 設定session
const sessionSettings = {
  // 金鑰
  secret: 'mtreport',
  // 存放位置
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  // 登入有效期
  cookie: {
    maxAge: 1000 * 60 * 30
  },
  // 不存入多餘資料進mongo
  saveUninitialized: false,
  // 若有發請求則延長有效時間
  rolling: true,
  resave: true
}

if (process.env.DEV === 'false') {
  // 如果不是本機的開發環境，允許不同網域的認證
  sessionSettings.cookie.sameSite = 'none'
  // 如果是不同網域的認證，一定要設定 secure
  sessionSettings.cookie.secure = true
}
app.use(session(sessionSettings))

// 部屬上 heroku 一定要設定
app.set('trust proxy', 1)

app.use('/adminusers', routerAdminusers)
app.use('/products', routerProducts)

app.listen(process.env.PORT, () => {
  console.log('server started')
})
