import express from 'express'
import { file } from '../imgupload.js'
import { uploadNewPlans, editNewPlans, deleteNewPlans, searchNewPlans, searchNewPlansById } from '../controllers/newplans.js'

const router = express.Router()

// 取得行程id
router.post('/', uploadNewPlans)
router.put('/:id', editNewPlans)
router.delete('/:id', deleteNewPlans)
router.get('/', searchNewPlans)
router.get('/:id', searchNewPlansById)

router.get('/file/:file', file)
export default router
