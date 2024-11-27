import { Router } from 'express'
import { HomeController } from '../controllers/homeController.js'

const homeControl = new HomeController()
export const homeRouter = Router()

homeRouter.get('/', homeControl.getInfo)
