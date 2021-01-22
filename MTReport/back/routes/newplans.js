import express from 'express'
import { addToNewPlans, editNewPlans, deleteNewPlans, searchNewPlans, searchNewPlansById } from '../controllers/newplans.js'

const router = express.Router()

// 取得行程id
router.post('/', addToNewPlans)
router.put('/:id', editNewPlans)
router.delete('/:id', deleteNewPlans)
router.get('/', searchNewPlans)
router.get('/:id', searchNewPlansById)

export default router
