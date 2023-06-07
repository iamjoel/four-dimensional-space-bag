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
          {
            type: 'doc',
            label: '边框',
            id: `${PREFIX}/base/css/rules/border/overview`
          },
          {
            type: 'doc',
            label: '文字',
            id: `${PREFIX}/base/css/rules/text/overview`
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
      {
        type: 'doc',
        label: '正则',
        id: `${PREFIX}/base/js/regex`
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
  },
  {
    type: 'category',
    label: '场景',
    items: [
      {
        type: 'doc',
        label: '代码调试',
        id: `${PREFIX}/scenario/debugger/overview`
      },
    ]
  },
  {
    type: 'category',
    label: '代码质量',
    items: [
      {
        type: 'doc',
        label: '高质量组件设计的思考',
        id: `${PREFIX}/code-quality/component-design/readme`
      }
    ]
  },
  {
    type: 'category',
    label: '工具',
    items: [
      {
        type: 'doc',
        label: 'Notion AI',
        id: `${PREFIX}/tools/notion-ai/readme`
      },
      {
        type: 'doc',
        label: '自定义代码片段',
        id: `${PREFIX}/tools/vscode/snippet`
      },
    ]
  },
  {
    type: 'doc',
    label: '编程练习题',
    id: `${PREFIX}/kata/readme`
  },
]

module.exports = config
