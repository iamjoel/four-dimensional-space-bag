const PREFIX = 'ai'

const config = [
  {
    type: 'doc',
    label: '概览',
    id: `${PREFIX}/overview`,
  },
  {
    type: 'category',
    label: 'AI 模型',
    collapsed: false,
    items: [
      {
        type: 'doc',
        label: 'LLM',
        id: `${PREFIX}/model/llm`,
      },
    ]
  },
  {
    type: 'doc',
    label: '应用场景',
    id: `${PREFIX}/app/index`,
  },
  {
    type: 'category',
    label: '构建应用',
    collapsed: false,
    items: [
      {
        type: 'doc',
        label: '概览',
        id: `${PREFIX}/build-app/overview`,
      },
      {
        type: 'doc',
        label: '提示词',
        id: `${PREFIX}/build-app/prompt/overview`,
      },
      {
        type: 'doc',
        label: 'Flow',
        id: `${PREFIX}/build-app/flow/overview`,
      },
    ]
  },
]

module.exports = config
