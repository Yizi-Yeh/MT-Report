import express from 'express'
import { uploadProduct, editProduct, deleteeProduct, searchProduct, searchProductById } from '../controllers/products.js'

const router = express.Router()

router.post('/', uploadProduct)
router.patch('/', editProduct)
router.delete('/:id', deleteeProduct)
router.get('/', searchProduct)
router.get('/:id', searchProductById)

export default router
