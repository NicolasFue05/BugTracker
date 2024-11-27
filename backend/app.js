import express from 'express'
import { homeRouter } from './views/homeRoutes.js'
import { repositoriesRouter } from './views/repositoriesRoutes.js'
import { userRouter } from './views/userRoutes.js'

const app = express()
app.disable('x-powered-by') // Disable express header

app.use('/', homeRouter)

app.use('/profile', userRouter)

app.use('/repositories', repositoriesRouter)

export default app
