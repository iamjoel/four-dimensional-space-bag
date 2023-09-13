# Script Kit
[官网](https://www.scriptkit.com/)

> An open-source kit to optimize your developer workflow

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





