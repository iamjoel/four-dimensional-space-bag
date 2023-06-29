const PREFIX = 'basic'

const config = [
  {
    type: 'doc',
    label: '基础',
    id: `${PREFIX}/overview`,
  },
  {
    type: 'doc',
    label: '设计原则',
    id: `${PREFIX}/design/rule/index`,
  },
  // TODO 配色
  {
    type: 'category',
    label: '英语',
    collapsed: false,
    items: [
      {
        type: 'doc',
        label: '助动词和动词加s的规则',
        id: `${PREFIX}/english/grammar/auxiliary-verbs-and-verbs-add-s`,
      },
    ],
  },
]

module.exports = config
