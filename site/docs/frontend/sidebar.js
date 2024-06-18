const PREFIX = 'frontend'

const config = [
  {
    type: 'doc',
    label: '概览',
    id: `${PREFIX}/overview`,
  },
  {
    type: 'doc',
    label: 'HTML Demo',
    id: `${PREFIX}/base/html/demo`,
  },
  {
    type: 'category',
    label: 'CSS',
    collapsed: false,
    items: [
      {
        type: 'doc',
        label: '选择器',
        id: `${PREFIX}/base/css/selector/overview`,
      },
      {
        type: 'doc',
        label: '布局',
        id: `${PREFIX}/base/css/layout/overview`,
      },
      {
        type: 'category',
        label: '规则',
        items: [
          {
            type: 'doc',
            label: '背景',
            id: `${PREFIX}/base/css/rules/background/overview`,
          },
          {
            type: 'doc',
            label: '图片',
            id: `${PREFIX}/base/css/rules/image/overview`,
          },
          {
            type: 'doc',
            label: '边框',
            id: `${PREFIX}/base/css/rules/border/overview`,
          },
          {
            type: 'doc',
            label: '文字',
            id: `${PREFIX}/base/css/rules/text/overview`,
          },
        ],
      },
      {
        type: 'doc',
        label: 'Tailwind',
        id: `${PREFIX}/base/css/tailwind/overview`,
      },
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
        id: `${PREFIX}/base/js/dom-bom/overview`,
      },
      {
        type: 'doc',
        label: '操作媒体',
        id: `${PREFIX}/base/js/media/overview`,
      },
      {
        type: 'doc',
        label: '正则',
        id: `${PREFIX}/base/js/regex`,
      },
    ],
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
            id: `${PREFIX}/framework/react/api/hooks`,
          },
          {
            type: 'doc',
            label: 'Demo',
            id: `${PREFIX}/framework/react/demo/index`,
          },
        ],
      },
      {
        type: 'category',
        label: 'Vue3',
        items: [
          {
            type: 'doc',
            label: 'Demo',
            id: `${PREFIX}/framework/vue/demo/index`,
          },
        ],
      },
    ],
  },
  {
    type: 'category',
    label: '场景',
    items: [
      {
        type: 'doc',
        label: '代码调试',
        id: `${PREFIX}/scenario/debugger/overview`,
      },
      {
        type: 'doc',
        label: '拖动排序',
        id: `${PREFIX}/scenario/sortable/index`,
      },
      {
        type: 'doc',
        label: '动画',
        id: `${PREFIX}/scenario/animate/index`,
      },
      {
        type: 'doc',
        label: '手势',
        id: `${PREFIX}/scenario/gesture/index`,
      },
      {
        type: 'doc',
        label: '解析&生成 CSV',
        id: `${PREFIX}/scenario/csv/index`,
      },
      {
        type: 'doc',
        label: '元素跟随(Portal to follow elem)',
        id: `${PREFIX}/scenario/portal/index`,
      },
      {
        type: 'doc',
        label: '拖放生成页面',
        id: `${PREFIX}/scenario/dnd-page/index`,
      },
      {
        type: 'doc',
        label: '流程图',
        id: `${PREFIX}/scenario/flow/demo`,
      },
    ],
  },
  {
    type: 'category',
    label: '代码质量',
    items: [
      {
        type: 'doc',
        label: '高质量组件设计的思考',
        id: `${PREFIX}/code-quality/component-design/readme`,
      },
    ],
  },
  {
    type: 'category',
    label: '工具',
    items: [
      {
        type: 'doc',
        label: 'SVG 属性转化为驼峰',
        id: `${PREFIX}/tools/svg-attr-case/readme`,
      },
      {
        type: 'doc',
        label: 'Notion AI',
        id: `${PREFIX}/tools/notion-ai/readme`,
      },
      {
        type: 'doc',
        label: '自定义代码片段',
        id: `${PREFIX}/tools/vscode/snippet`,
      },
      {
        type: 'doc',
        label: '包管理工具',
        id: `${PREFIX}/tools/package-manage`,
      },
    ],
  },
  {
    type: 'doc',
    label: '编程练习题',
    id: `${PREFIX}/kata/readme`,
  },
]

module.exports = config
