import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import beautify from 'mongoose-beautiful-unique-validation'
import connectMongo from 'connect-mongo'
import cors from 'cors'
import session from 'express-session'

dotenv.config()

mongoose.connect(process.env.DBURL)
mongoose.plugin(beautify)

const app = express()

app.use(bodyParser.json())

app.use(cors({
  origin (origin, callback) {
    if (origin === undefined) {
      callback(null, true)
    } else {
      if (process.env.CORS === 'true') {
        callback(null, true)
      } else if (origin.includes('github')) {
        callback(null, true)
      } else {
        callback(null, false)
      }
    }
  }
}))

app.use(bodyParser)
app.listen(process.env.PORT, () => {
  console.log('server started')
})