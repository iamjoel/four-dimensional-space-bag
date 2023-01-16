# 按钮
import Demo from '@site/src/components/demo'
import Button from '@site/src/components/base/button'
import Code from '@site/src/components/code'

## 基本用法
<Demo>
  <Button>Primary</Button>
  <Button type="outline">OutLine</Button>
  <Button type="text">text</Button>
</Demo>

<Code
  content={
`<Button>Primary</Button>
<Button type="outline">OutLine</Button>
<Button type="text">text</Button>
`}
/>

## 尺寸
<Demo>
  <Button size="sm">Small</Button>
  <Button size="md">Middle</Button>
  <Button size="lg">Large</Button>
</Demo>

<Code
  content={
`<Button size="sm">Small</Button>
<Button size="md">Middle</Button>
<Button size="lg">Large</Button>
`}
/>