// Group: Search
// Name: Nav
// Shortcut: cmd 1
// Frequently used tools, infos and so on.

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
  // {
  //   name: 'Dify merge main',
  //   description: 'Fetch latest main to current branch',
  //   value: {
  //     action: 'customize',
  //     value: 'difyMergeMain'
  //   }
  // },
  {
    name: "Dify Production(Cloud) URL",
    description: "线上 URL",
    value: {
      value: "https://cloud.dify.ai/apps",
    },
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

const dev = [
  {
    name: 'React Component Template',
    value: {
      action: 'customize',
      value: 'outputReactComponentTemplate'
    }
  },
  {
    name: 'Tailwind cheat sheet',
    value: {
      action: 'customize',
      value: 'showTailwindCheatSheet'
    }
  },
  {
    name: 'Show IP',
    value: {
      action: 'customize',
      value: 'showIP'
    }
  }
  // Deprecated. Not used for UI design upgraded.
  // {
  //   name: "Style to Tailwind css name",
  //   value: {
  //     value: 'https://style-to-tailwind-class-name.vercel.app/'
  //   }
  // },
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
    name: "ScriptKit Docs",
    value: {
      action: 'customize',
      value: "showScriptKitDocs",
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

let { value, action } = await arg("Select open target", [...dify, ...dev, ...info])

const tools = {
  async difyMergeMain() {
    const options = {
      baseDir: '/Users/joel/dify/dify'
    }
    const git = simpleGit(options)
    const { current: currBranch } = await git.branchLocal()
    await git.checkout('main')
    await git.pull()
    await git.checkout(currBranch)
    await git.mergeFromTo('main', currBranch)
  },

  async outputReactComponentTemplate() {
    const name = await arg("Component name")
    const code = `'use client'
import React, { FC } from 'react'

type Props = {
  
}

const ${name}: FC<Props> = ({
}) => {
  return (
    <div>
    </div>
  )
}
export default React.memo(${name})

`
    // insertText in cursor position
    setSelectedText(code)
  },
  async showTailwindCheatSheet() {
    await div(md(`
* \`h-screen\`: 100vh
* \`leading-tight\`: 1.25; \`leading-normal\`: 1.5
* \`font-normal\`: 400
* \`truncate\`: text overflow ellipsis and truncate
* \`line-clamp-2\`: line clamp 2
`))
  },
  async showIP() {
    const ip = await npm("ip")
    const ipAddr = ip.address()
    await div(ipAddr, 'p-4')
  },
  async showScriptKitDocs() {
    const html = md(`
# ScriptKit
* [Scripts](https://www.scriptkit.com/scripts)
* [ScriptKit](https://scriptkit.com)
* [API](https://github.com/johnlindquist/kit/blob/main/API.md)
* [Guide](https://github.com/johnlindquist/kit/blob/main/GUIDE.md)
`)

    await div(html)
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
    await tools[value]()
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


