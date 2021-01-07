import express from 'express'
import { uploadProduct, editProduct, deleteeProduct, searchProduct } from '../controllers/products.js'

const router = express.Router()

router.post('/products', uploadProduct)
router.patch('/products', editProduct)
router.delete('/products', deleteeProduct)
router.get('/products', searchProduct)

export default router
