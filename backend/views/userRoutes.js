import { Router } from 'express'
import { UserController } from '../controllers/userController.js'

export const userRouter = Router()
const userControl = new UserController()

userRouter.get('/', userControl.getUser)

userRouter.post('/', userControl.insertUser)

userRouter.patch('/', userControl.updateUser)
