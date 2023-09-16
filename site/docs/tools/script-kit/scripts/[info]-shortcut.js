// Group: Search
// Name: Shortcut
// Shortcut: cmd 1

import "@johnlindquist/kit"
const open = await npm("open")

const dify = [
  {
    name: "Dev URL",
    description: "Dev URL",
    // shortcut: "d",
    value: {
      value: "https://cloud.dify.dev/apps",
    },
  },
  {
    name: "Progress",
    description: "Dev 环境构建进度",
    value: {
      value: "https://github.com/langgenius/dify/commits/deploy/dev",
    },
  },
  {
    name: "Pull Request",
    description: "Pull Request",
    value: {
      value: "https://github.com/langgenius/dify/pulls",
    }
  },
  {
    name: "Production URL",
    description: "线上 URL",
    value: {
      value: "https://cloud.dify.ai/apps",
    },
  },
  {
    name: 'Ligai',
    description: 'Ligai 跟进迭代',
    value: {
      value: "https://ligai.cn/app/kanban/list?pid=118028049"
    }
  },
  {
    name: "Icon Doc",
    description: "Icon 文档",
    value: {
      value: 'https://langgenius.feishu.cn/wiki/ERwlwKLeNiNGO9kp88IcUflqnWp'
    },
  },
  {
    name: "Chat Webapp Template",
    description: "聊天 Web 模版",
    value: {
      action: 'code',
      value: "~/dify/webapp-conversation",
    },
  },
  {
    name: "Text generation Webapp Template",
    description: "文本生成 Web 模版",
    value: {
      action: 'code',
      value: "~/dify/webapp-text-generator",
    },
  }
]

const info = [
  {
    name: "Four dimensional",
    value: {
      value: "https://iamjoel.github.io/four-dimensional-space-bag/site/build/",
    }
  },
  {
    name: "Four dimensional Code",
    value: {
      action: 'code',
      value: "~/joel/four-dimensional-space-bag/site",
    }
  },
  {
    name: 'Github Trending',
    value: {
      value: 'https://github.com/trending',
    }
  },
  {
    name: 'Sync Script to GitHub',
    description: '同步 Script kit 的脚本到 GitHub',
    value: {
      action: 'exec',
      value: 'rsync -r --delete ~/.kenv/scripts ~/joel/four-dimensional-space-bag/site/docs/tools/script-kit',
    }
  }
]

let { value, action} = await arg("Select open target", [...dify, ...info])

switch (action) {
  case 'code':
    await exec(`code ${value}`)
    break
  case 'exec':
    await exec(value)
    break
  default:
    open(value)
}




