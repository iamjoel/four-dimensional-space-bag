const PREFIX = 'frontend'

const config = [
  {
    type: 'doc',
    label: '概览',
    id: `${PREFIX}/overview`,
  },
  {
    type: 'category',
    label: 'CSS',
    collapsed: false,
    items: [
      {
        type: 'doc',
        label: '选择器',
        id: `${PREFIX}/base/css/selector/overview`
      },
      {
        type: 'doc',
        label: '布局',
        id: `${PREFIX}/base/css/layout/overview`
      },
      {
        type: 'category',
        label: '规则',
        items: [
          {
            type: 'doc',
            label: '背景',
            id: `${PREFIX}/base/css/rules/background/overview`
          },
          {
            type: 'doc',
            label: '图片',
            id: `${PREFIX}/base/css/rules/image/overview`
          },
        ]
      }
      
    ],
  },
  {
    type: 'category',
    label: 'JavaScript',
    collapsed: false,
    items: [
      {
        type: 'doc',
        label: 'DOM & BOM',
        id: `${PREFIX}/base/js/dom-bom/overview`
      },
      {
        type: 'doc',
        label: '操作媒体',
        id: `${PREFIX}/base/js/media/overview`
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
