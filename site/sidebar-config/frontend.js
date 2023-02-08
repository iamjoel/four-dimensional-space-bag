const PREFIX = 'frontend'

const config = [
  {
    type: 'doc',
    label: '概览',
    id: `${PREFIX}/overview`,
  },
  {
    type: 'category',
    label: 'JavaScript',
    collapsed: false,
    items: [
      {
        type: 'doc',
        label: 'DOM',
        id: `${PREFIX}/base/js/dom/overview`
      },
    ]
  },
  {
    type: 'category',
    label: '框架',
    collapsed: false,
    items: [
      {
        type: 'category',
        label: 'React',
        collapsed: false,
        items: [
          {
            type: 'doc',
            label: 'Hooks',
            id: `${PREFIX}/framework/react/api/hooks`
          },
          {
            type: 'doc',
            label: 'Demo',
            id: `${PREFIX}/framework/react/demo/index`
          },
        ]
      },
      {
        type: 'category',
        label: 'Vue3',
        items: [
          {
            type: 'doc',
            label: 'Demo',
            id: `${PREFIX}/framework/vue/demo/index`
          },
        ]
      },
    ]
  }
]

module.exports = config
