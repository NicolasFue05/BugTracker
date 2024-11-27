// const user = {
//   name: 'Nicolas Fuentes',
//   username: 'NicolasFue05',
//   password: 'nico'
// }
// import { validateUser } from '../schemas/userSchema.js'

export class UserController {
  getUser (req, res) {
    res.json({ message: 'User getter' })
  }

  insertUser (req, res) {
    res.json({ message: 'User created!' })
  }

  updateUser (req, res) {
    res.json({ message: 'User updated' })
  }
}
