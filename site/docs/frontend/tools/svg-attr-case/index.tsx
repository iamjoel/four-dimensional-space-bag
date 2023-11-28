import React, { useEffect, useState } from 'react'
import { Input, Space, Typography } from '@arco-design/web-react'

const TextArea = Input.TextArea
const { Title } = Typography

function convertSVGAttributesToCamelCase(svgString: string) {
  return svgString.replace(/(\w+)-(\w+)="([^"]+)"/g, (match, p1, p2, p3) => {
    return `${p1 + p2.charAt(0).toUpperCase() + p2.slice(1)}="${p3}"`
  })
}
const testSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="26" height="38" viewBox="0 0 26 38" fill="none">
  <path d="M20.5005 3.49991C23.5 18 18.7571 25.2595 2.92348 31.9599" stroke="#F26725" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2.21996 32.2756L8.37216 33.5812" stroke="#F26725" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2.22168 32.2764L3.90351 27.4459" stroke="#F26725" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`

function App() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')

  useEffect(() => {
    if (input)
      setOutput(convertSVGAttributesToCamelCase(input))
  }, [input])
  return (
    <Typography>
      <Title>SVG attr to camel cast</Title>
      <Space wrap>
        <div>
          <Title>Input</Title>
          <TextArea value={input} onChange={setInput} placeholder='Please enter ...' style={{ minHeight: 164, width: 400 }} />
        </div>
        <div>
          <Title>Output</Title>
          <TextArea value={output} onChange={setOutput} style={{ minHeight: 164, width: 400 }} />
        </div>
      </Space>
    </Typography>
  )
};

export default App
