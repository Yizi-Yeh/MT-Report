import express from 'express'
import { create, login, logout, heartbeat, orderCreate } from '../controllers/users.js'

const router = express.Router()

// 註冊
router.post('/', create)
// 登入
router.post('/login', login)
// 登出
router.delete('/logout', logout)
// 確認登入
router.get('/heartbeat', heartbeat)

// 建立訂單
router.post('/order/:id', orderCreate)
export default router
