const PREFIX = 'frontend'

const config = [
  {
    type: 'doc',
    label: '概览',
    id: `${PREFIX}/overview`,
  },
  {
    type: 'category',
    label: '框架',
    items: [
      {
        type: 'category',
        label: 'React',
        items: [
          {
            type: 'doc',
            label: 'Demo',
            id: `${PREFIX}/framework/react/demo/index`
          },
        ]
      },
      
    ]
  }
]

module.exports = config
