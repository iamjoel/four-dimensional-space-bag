// Name: react-template
// Shortcut: cmd shift z

import "@johnlindquist/kit"

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
