import express from 'express'
import { addToNewPlans, getIdToNewPlans, editNewPlans, deleteNewPlans, searchNewPlans, searchNewPlansById, addNum } from '../controllers/newplans.js'

const router = express.Router()

// 手動建立
router.post('/', addToNewPlans)
// 動態建立
router.post('/', getIdToNewPlans)
// 修改
router.put('/:id', editNewPlans)
// 刪除
router.delete('/:id', deleteNewPlans)
// 查詢
router.get('/', searchNewPlans)
router.get('/:id', searchNewPlansById)

router.patch('/:id', addNum)

export default router
