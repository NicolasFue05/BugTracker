export class RepositoryController {
  getRepositories (req, res) {
    res.json({ message: 'Repositories Class' })
  }

  getRepository (req, res) {
    // Recuperar el id
    const { id } = req.params
    res.json({ repository_name: id })
  }

  insertRepository (req, res) {
    const { id } = req.params
    res.json({ message: 'Repository Inserted', repo: id })
  }

  updateRepository (req, res) {
    res.json({ message: 'Repository updated' })
  }
}
