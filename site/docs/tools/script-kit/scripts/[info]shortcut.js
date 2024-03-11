// Group: Search
// Name: Shortcut
// Shortcut: cmd 1

import "@johnlindquist/kit"
const open = await npm("open")
const simpleGit = await npm("simple-git")

const dify = [
  {
    name: "Dify 飞书文档/Doc",
    // shortcut: "d",
    value: {
      value: "https://langgenius.feishu.cn/wiki/WYDKwCWdairWh5kXN4NcGN1inyg",
    },
  },
  {
    name: "Dify Dev URL",
    description: "Dev URL",
    // shortcut: "d",
    value: {
      value: "https://cloud.dify.dev/apps",
    },
  },
  {
    name: "Dify Dev Progress",
    description: "Dify Dev 环境构建进度",
    value: {
      value: "https://github.com/langgenius/dify/commits/deploy/dev",
    },
  },
  {
    name: "Dify Pull Request",
    description: "Dify Pull Request",
    value: {
      value: "https://github.com/langgenius/dify/pulls",
    }
  },
  {
    name: 'Dify merge main',
    description: 'Fetch latest main to current branch',
    value: {
      action: 'customize',
      value: 'difyMergeMain'
    }
  },
  {
    name: "Dify Production(Cloud) URL",
    description: "线上 URL",
    value: {
      value: "https://cloud.dify.ai/apps",
    },
  },
  {
    name: 'Dify Ligai',
    description: 'Ligai 跟进迭代',
    value: {
      value: "https://ligai.cn/app/kanban/list?pid=118028049"
    }
  },
  {
    name: "Dify 新建 ICON",
    description: "npm run gen-icons",
    value: {
      action: 'exec',
      value: "open ~/dify/dify/web/app/components/base/icons/assets",
    },
  },
  {
    name: "Dify Chat Webapp Template",
    description: "聊天 Web 模版",
    value: {
      action: 'code',
      value: "~/dify/webapp-conversation",
    },
  },
  {
    name: "Dify Text generation Webapp Template",
    description: "文本生成 Web 模版",
    value: {
      action: 'code',
      value: "~/dify/webapp-text-generator",
    },
  },
  {
    name: "Dify Doc Code",
    description: "Dify 文档",
    value: {
      action: 'code',
      value: "~/dify/dify-docs",
    },
  },
  {
    name: 'Dify GitHub',
    value: {
      value: 'https://github.com/langgenius/dify'
    }
  },
  {
    name: 'Dify Website',
    description: "Dify 官网",
    value: {
      value: 'https://dify.ai'
    }
  },
  {
    name: "Dify Feature",
    description: "The Feishu's doc links of features",
    value: {
      value: "https://langgenius.feishu.cn/drive/folder/XEpcfPLrtl3BkcdOJ5KclqTanRf",
    }
  },
  {
    name: "Dify Daily",
    description: "The Feishu's doc links of daily",
    value: {
      value: "https://langgenius.feishu.cn/drive/folder/DXI9f3rlwlXAxPdpwuVc30QSnVd",
    }
  },
]

const info = [
  {
    name: "Four dimensional",
    value: {
      value: "https://iamjoel.github.io/four-dimensional-space-bag/site/build/",
    }
  },
  {
    name: "Dialogue Code",
    value: {
      action: 'code',
      value: "~/joel/dialogue",
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
    name: 'Joel GitHub',
    value: {
      value: 'https://github.com/iamjoel'
    }
  },
  {
    name: "LLM Explore Code",
    value: {
      action: 'code',
      value: "~/joel/llm-explore",
    }
  },
  {
    name: 'Github Trending',
    value: {
      value: 'https://github.com/trending',
    }
  },
  {
    name: 'Twitter',
    value: {
      value: 'https://twitter.com/home',
    }
  },
  {
    name: "ScriptKit Code",
    value: {
      action: 'code',
      value: "~/.kenv",
    }
  },
  {
    name: "Style to Tailwind css name",
    value: {
      value: 'https://style-to-tailwind-class-name.vercel.app/'
    }
  },
  {
    name: 'Sync ScriptKit to GitHub',
    description: '同步 Script kit 的脚本到 GitHub',
    value: {
      action: 'exec',
      value: 'rsync -r --delete ~/.kenv/scripts ~/joel/four-dimensional-space-bag/site/docs/tools/script-kit',
    }
  }
]

let { value, action} = await arg("Select open target", [...dify, ...info])

const tools = {
  async difyMergeMain() {
    const options = {
      baseDir: '/Users/joel/dify/dify'
    }
    const git = simpleGit(options)
    const {current: currBranch} = await git.branchLocal()
    await git.checkout('main')
    await git.pull()
    await git.checkout(currBranch)
    await git.mergeFromTo('main', currBranch)
  }
}
switch (action) {
  case 'code':
    await exec(`code ${value}`)
    break
  case 'exec':
    await exec(value)
    break
  case 'customize':
    tools[value]()
    break
  default:
    open(value)
}

// support iframe
// div(`
//   <iframe 
//     src='https://page-maker-fywu.vercel.app/form/normal/edit'
//     class='w-full'
//     style='height: 600px'
//   >
//   </iframe>
// `)


