import express from 'express'
import { uploadNewPlans, editNewPlans, deleteNewPlans, searchNewPlans, searchNewPlansById } from '../controllers/newplans.js'

const router = express.Router()

router.post('/', uploadNewPlans)
router.put('/:id', editNewPlans)
router.delete('/:id', deleteNewPlans)
router.get('/', searchNewPlans)
router.get('/:id', searchNewPlansById)

export default router
