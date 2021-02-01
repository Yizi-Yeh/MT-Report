import express from 'express'
import { addForm, editForm, deleteForm, searchForm, searchFormById } from '../controllers/userdetails.js'

const router = express.Router()

// 手動建立
router.post('/order/:id', addForm)
// 修改
router.patch('/:id', editForm)
// 刪除
router.delete('/:id', deleteForm)
// 查詢
router.get('/', searchForm)
router.get('/:id', searchFormById)

export default router
