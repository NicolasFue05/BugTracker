import express from 'express'
import { homeRouter } from './views/homeRoutes.js'
import { repositoriesRouter } from './views/repositoriesRoutes.js'
import { userRouter } from './views/userRoutes.js'
import { bugRouter } from './views/bugsRoutes.js'

const app = express()
app.disable('x-powered-by') // Disable express header

app.use('/', homeRouter)

app.use('/profile', userRouter)

app.use('/repositories', repositoriesRouter)

app.use('/repository', bugRouter)

app.use('/bug', bugRouter)

export default app
