import { Router } from 'express'
import { BugController } from '../controllers/bugController.js'

const bugControl = new BugController()
export const bugRouter = Router()

bugRouter.get('/', bugControl.getBugs)

bugRouter.get('/:id', bugControl.getBug)
