import express from 'express'
import { create, edit, deletee, search, file } from '../controllers/imgs.js'

const router = express.Router()

router.post('/', create)
router.patch('/:id', edit)
router.delete('/:id', deletee)
router.get('/', search)
router.get('/file/:file', file)

export default router
