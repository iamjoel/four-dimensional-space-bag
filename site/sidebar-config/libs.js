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
            id: `${PREFIX}/components/base/button`
          },
          {
            type: 'doc',
            label: '卡片',
            id: `${PREFIX}/components/base/card`
          },
        ]
      },
      {
        type: 'category',
        label: '逻辑组件',
        items: [
          {
            type: 'doc',
            label: '播放器进度控制条',
            id: `${PREFIX}/components/compound/media-player-progress`
          },
        ]
      }
    ]
  },
  {
    type: 'category',
    label: 'hooks',
    items: [
      {
        type: 'doc',
        label: '概览',
        id: `${PREFIX}/hooks/overview`
      },
    ]
  },
  {
    type: 'category',
    label: '工具方法',
    items: [
      {
        type: 'doc',
        label: '概览',
        id: `${PREFIX}/utils/overview`
      },
    ]
  },
  {
    type: 'category',
    label: '日常练习',
    items: [
      {
        type: 'doc',
        label: '2023/01/29',
        id: `${PREFIX}/practise/23-01-29/readme`
      },
    ]
  },
]

module.exports = config
