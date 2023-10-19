const PREFIX = 'backend'

const config = [
  {
    type: 'doc',
    label: '概览',
    id: `${PREFIX}/overview`,
  },
  {
    type: 'category',
    label: 'Node.js',
    collapsed: false,
    items: [
      {
        type: 'doc',
        label: '环境变量',
        id: `${PREFIX}/nodejs/env/index`,
      },
    ],
  },
  {
    type: 'category',
    label: 'Database',
    collapsed: false,
    items: [
      {
        type: 'doc',
        label: 'Postgre',
        id: `${PREFIX}/database/postgre`,
      },
    ],
  },
]

module.exports = config
