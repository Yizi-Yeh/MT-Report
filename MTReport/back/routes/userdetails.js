import express from 'express'
import { addForm, getForm, editForm, deleteForm, searchForm, searchFormById } from '../controllers/userdetails.js'

const router = express.Router()

// 手動建立
router.post('/order/:id', addForm)
// 動態建立
router.get('/', getForm)
// 修改
router.patch('/:id', editForm)
// 刪除
router.delete('/:id', deleteForm)
// 查詢
router.get('/', searchForm)
router.get('/:id', searchFormById)

export default router
