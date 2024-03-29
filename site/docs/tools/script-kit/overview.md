# Script Kit
[官网](https://www.scriptkit.com/)

> An open-source kit to optimize your developer workflow

减少了操作路径。软件A操作(还可能要软件 B 等) -> 结果，优化成了 Script Kit -> 结果。比如 搜索 google。做法：打开浏览器，上 Google 页，输入关键字搜索。

自动化一些任务，快速启动。

## 搜索
### 搜索 Google
```js
// Group: Search
// Name: Google
// Shortcut: cmd g
// Description: Google it
// Author: Joel

import '@johnlindquist/kit'

const q = await arg('Query...')
browse(`https://www.google.com/search?q=${q}`)
```

### 快速访问网页/打开项目
```js
// Group: Search
// Name: dify shortcut
// Shortcut: cmd 1

import '@johnlindquist/kit'

const open = await npm('open')

const { value, action } = await arg('Select a Fruit', [
  {
    name: 'Select open target',
    description: 'Dev URL',
    value: {
      url: 'https://...',
    },
  },
  {
    name: '聊天 Web 模版',
    value: {
      action: 'code', // 用 vscode 打开
      value: '项目路径',
    },
  }
])

switch (action) {
  case 'code':
    await exec(`code ${value}`)
    break
  default:
    open(value)
}
```

### 获得本机 IP
```js 
// Group: Search
// Name: IP
// Shortcut: cmd i
// Description: Get your IP address
await term('ifconfig -a | grep -e "inet [0-9]" | cut -d" " -f 2')
```

## 插入文件模版
以 react 模版为例：
```js
// Name: react-template
// Shortcut: cmd shift z

import '@johnlindquist/kit'

const name = await arg('Component name')
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
```







