import { Router } from 'express'
import { RepositoryController } from '../controllers/repositoryController.js'
// Crear el router
export const repositoriesRouter = Router()
const repositoryControl = new RepositoryController()

repositoriesRouter.get('/', repositoryControl.getRepositories)

repositoriesRouter.get('/:id', repositoryControl.getRepository)

repositoriesRouter.post('/:id', repositoryControl.insertRepository)

repositoriesRouter.patch('/:id', repositoryControl.updateRepository)
