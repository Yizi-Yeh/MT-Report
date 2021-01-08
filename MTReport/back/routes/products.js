import express from 'express'
import { uploadProduct, editProduct, deleteeProduct, searchProduct } from '../controllers/products.js'

const router = express.Router()

router.post('/', uploadProduct)
router.patch('/', editProduct)
router.delete('/', deleteeProduct)
router.get('/', searchProduct)

export default router
