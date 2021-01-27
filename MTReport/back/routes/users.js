import express from 'express'
import { create, login, logout, heartbeat, searchUsers, createOrder, searchUsersOrders } from '../controllers/users.js'

const router = express.Router()

// 註冊
router.post('/', create)
// 登入
router.post('/login', login)
// 登出
router.delete('/logout', logout)
// 確認登入
router.get('/heartbeat', heartbeat)
// 查詢全部使用者
router.get('/', searchUsers)

// 建立訂單
router.post('/order/:id', createOrder)
// 查詢使用者訂單
router.get('/order/:id', searchUsersOrders)

export default router
