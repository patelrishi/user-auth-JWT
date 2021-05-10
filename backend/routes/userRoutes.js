import express from 'express'

import { protect } from '../middleware/authMiddleware.js'
import { authUser, registerUser } from '../controller/userController.js'

const router = express.Router()

router.route('/').post(registerUser).get(protect)
router.post('/login', authUser)

export default router
