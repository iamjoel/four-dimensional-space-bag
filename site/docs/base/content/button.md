import Demo from '@site/src/components/demo'
import Button from '@site/src/components/base/button'
import Code from '@site/src/components/code'

# 按钮
## 基本用法
<Demo className="space-x-3">
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
<Demo className="space-x-3">
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

## 禁用
<Demo className="space-x-3">
  <Button disabled>禁用</Button>
  <Button disabled type="outline">禁用</Button>
  <Button disabled type="text">禁用</Button>
</Demo>

<Code
  content={
`<Button disabled>禁用</Button>
<Button disabled type="outline">禁用</Button>
<Button disabled type="text">禁用</Button>
`}
/>