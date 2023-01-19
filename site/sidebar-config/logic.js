const PREFIX = 'logic'

const config = [
  {
    type: 'doc',
    label: '逻辑组件',
    id: `${PREFIX}/nav`,
  },
  {
    type: 'category',
    label: '内容',
    items: [
      {
        type: 'doc',
        label: '书摘',
        id: `${PREFIX}/content/text-marked`
      },
    ]
  }
]

module.exports = config
