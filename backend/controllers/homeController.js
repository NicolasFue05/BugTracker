// import { randomUUID } from 'node:crypto'

// const Bug = {
//   id: randomUUID(),
//   name: '', // Required
//   description: '', // Optional
//   appearanceDate: '', // Required
//   type: [
//     'Server',
//     'Api',
//     'Compilation',
//     'Library',
//     'Version',
//     'UI',
//     'Database',
//     'UX',
//     'Performance',
//     'Logic',
//     'Security',
//     'Integration',
//     'Configuration',
//     'Network',
//     'Build/Deployment',
//     'Hardware',
//     'Accessibility',
//     'Memory',
//     'Concurrency',
//     'Dependency',
//     'Data Integrity',
//     'Localization',
//     'Testing',
//     'Documentation',
//     'Compatibility',
//     'UI State',
//     'Timing/Timeout',
//     'Analytics/Tracking',
//     'Cache'
//   ],
//   priority: ['Low', 'Medium', 'High', 'Critical'], // Required
//   status: ['Open', 'In Progress', 'Resolved', 'Closed'], // Required
//   resolvedDate: null,
//   affectedVersion: 'v1.0.3' // Versión de la aplicación o sistema afectado

// }

export class HomeController {
  getInfo (req, res) {
    const info = {
      repositories: 'Four Repositories',
      bugs: 'Tree Bugs'
    }
    res.json(info)
  }
}
