import express from 'express'
import { create, login, logout, heartbeat } from '../controllers/adminusers.js'

const router = express.Router()

router.post('/', create)
router.post('/login', login)
router.delete('/logout', logout)
router.get('/hearbeat', heartbeat)

export default router
