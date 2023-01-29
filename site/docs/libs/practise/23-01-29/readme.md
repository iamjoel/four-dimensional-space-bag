import TestCase from '@site/src/components/awesome/test-case'

# 2023/01/29
<TestCase
  title="全部正确"
  items={
    [
      {
        title: '数字正确',
        expectValue: 1,
        actuallyValue: 1
      },
      {
        title: '字符串正确',
        expectValue: 'a',
        actuallyValue: 'a'
      },
      {
        title: '对象正确',
        expectValue: {a: 3},
        actuallyValue: {a: 3}
      },
      {
        title: '数组正确',
        expectValue: [1, 2, 3],
        actuallyValue: [1, 2, 3]
      },
    ]
  }
/>

<TestCase
  title="全部错误"
  items={
    [
      {
        title: '数字错误',
        expectValue: 1,
        actuallyValue: 2
      },
      {
        title: '字符串错误',
        expectValue: 'a',
        actuallyValue: 'b'
      },
      {
        title: '数据类型错误',
        expectValue: '1',
        actuallyValue: 1
      },
      {
        title: '对象错误',
        expectValue: {a: 3},
        actuallyValue: {a: 4}
      },
      {
        title: '数组错误',
        expectValue: [1, 2, 3],
        actuallyValue: [1, 4, 3]
      },
    ]
  }
/>

<TestCase
  title="部分错误"
  items={
    [
      {
        title: '数字正确',
        expectValue: 1,
        actuallyValue: 1
      },
      {
        title: '字符串错误',
        expectValue: 'a',
        actuallyValue: 'b'
      },
    ]
  }
/>

