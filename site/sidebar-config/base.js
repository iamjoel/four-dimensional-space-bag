const PREFIX = 'base'

const config = [
  {
    type: 'doc',
    label: '基础组件',
    id: `${PREFIX}/nav`,
  },
  {
    type: 'category',
    label: '内容',
    items: [
      {
        type: 'doc',
        label: '按钮',
        id: `${PREFIX}/content/button`
      },
      {
        type: 'doc',
        label: '卡片',
        id: `${PREFIX}/content/card`
      },
    ]
  }
]

module.exports = config
