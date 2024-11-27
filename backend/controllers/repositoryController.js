export class RepositoryController {
  getRepositories (req, res) {
    res.json({ message: 'Repositories Class' })
  }

  getRepository (req, res) {
    res.json({ message: 'Repository Class' })
  }

  insertRepository (req, res) {
    res.json({ message: 'Repository Inserted' })
  }

  updateRepository (req, res) {
    res.json({ message: 'Repository updated' })
  }
}
