import express from 'express'
import { file } from '../imgupload.js'
import { uploadProduct, editProduct, deleteeProduct, searchProduct, searchProductById, createSchedules, createMeals, createImgs } from '../controllers/products.js'

const router = express.Router()

router.post('/', uploadProduct)
router.put('/:id', editProduct)
router.delete('/:id', deleteeProduct)
router.get('/', searchProduct)
router.get('/:id', searchProductById)

// images
router.get('/file/:file', file)

// 增加行程安排
router.post('/schedule/:id', createSchedules)
// 增加餐食安排
router.post('/meal/:id', createMeals)
// 增加行程圖片
router.post('/img/:id', createImgs)

export default router
