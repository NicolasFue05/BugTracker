export class BugController {
  getBugs (req, res) {
    res.json({ message: 'Bugs' })
  }

  getBug (req, res) {
    res.json({ message: 'Bug 1' })
  }
}
