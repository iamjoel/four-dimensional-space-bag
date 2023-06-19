const PREFIX = 'ai'

const config = [
  {
    type: 'doc',
    label: '概览',
    id: `${PREFIX}/overview`,
  },
  {
    type: 'doc',
    label: 'LLM 模型概览',
    id: `${PREFIX}/model/llm`,
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
  {
    type: 'doc',
    label: '应用',
    id: `${PREFIX}/app/index`,
  },
]

module.exports = config
