const PREFIX = 'libs'

const config = [
  {
    type: 'doc',
    label: '库',
    id: `${PREFIX}/overview`,
  },
  {
    type: 'category',
    label: '组件',
    items: [
      {
        type: 'category',
        label: '基础组件',
        items: [
          {
            type: 'doc',
            label: '按钮',
            id: `${PREFIX}/components/base/button/readme`,
          },
          {
            type: 'doc',
            label: '下拉选择器',
            id: `${PREFIX}/components/base/select/readme`,
          },
          {
            type: 'doc',
            label: '列表无限加载',
            id: `${PREFIX}/components/base/infinite-list/readme`,
          },
          {
            type: 'doc',
            label: 'Toast',
            id: `${PREFIX}/components/base/toast/readme`,
          },
          {
            type: 'doc',
            label: 'Loading',
            id: `${PREFIX}/components/base/loading/readme`,
          },
          {
            type: 'doc',
            label: '滑动输入条',
            id: `${PREFIX}/components/base/slider/readme`,
          },
          {
            type: 'doc',
            label: '上下文菜单',
            id: `${PREFIX}/components/base/context-menu/readme`,
          },
          {
            type: 'doc',
            label: '卡片',
            id: `${PREFIX}/components/base/card/readme`,
          },
        ],
      },
      {
        type: 'category',
        label: '逻辑组件',
        items: [
          {
            type: 'doc',
            label: '播放器进度控制条',
            id: `${PREFIX}/components/compound/media-player-progress`,
          },
        ],
      },
    ],
  },
  {
    type: 'category',
    label: 'hooks',
    items: [
      {
        type: 'doc',
        label: '概览',
        id: `${PREFIX}/hooks/overview`,
      },
    ],
  },
  {
    type: 'category',
    label: '工具方法',
    items: [
      {
        type: 'doc',
        label: '概览',
        id: `${PREFIX}/utils/overview`,
      },
    ],
  },
]

module.exports = config
