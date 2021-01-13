import express from 'express'
import { file } from '../imgupload.js'
import { uploadProduct, editProduct, deleteeProduct, searchProduct, searchProductById } from '../controllers/products.js'

const router = express.Router()

router.post('/', uploadProduct)
router.put('/:id', editProduct)
router.delete('/:id', deleteeProduct)
router.get('/', searchProduct)
router.get('/:id', searchProductById)

// images
router.get('/file/:file', file)

export default router
