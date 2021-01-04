import express from 'express'
import { uploadProduct, editProduct, deleteeProduct, adminuserProduct, fileProduct } from '../controllers/products.js'

const router = express.Router()

router.post('/', uploadProduct)
router.patch('/:id', editProduct)
router.delete(':/id', deleteeProduct)
router.get('/adminuser/:adminuser/', adminuserProduct)
router.get('/file/:file', fileProduct)

export default router
