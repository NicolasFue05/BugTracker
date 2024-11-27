import { Router } from 'express'

export const homeRouter = Router()

homeRouter.get('/', (request, respond) => {
  respond.json({ message: 'Home Page!' })
})
