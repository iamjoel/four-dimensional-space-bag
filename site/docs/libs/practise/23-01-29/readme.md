import TestCase from '@site/src/components/awesome/test-case'
import Demo from '@site/src/components/awesome/demo'
import AlignVer from '@site/src/components/temp/align-ver'
import { chunk, concat } from '@site/src/utils/array'

import { CountDemo } from '@site/docs/libs/components/demo/count'
import {SimpleSelectDemo} from '@site/docs/libs/components/demo/simple-select'

# 2023/01/29
## 简单下拉框
<SimpleSelectDemo />


## 1 垂直方向的对齐
<Demo>
  <AlignVer />
</Demo>

## 2 实现 [`_.chunk`](https://lodash.com/docs/4.17.15#chunk)
<TestCase
  title="chunk"
  items={[
    {
      title: `chunk(['a', 'b', 'c', 'd'], 2)`,
      expectValue: [['a', 'b'], ['c', 'd']],
      actuallyValue: chunk(['a', 'b', 'c', 'd'], 2)
    },
    {
      title: `chunk(['a', 'b', 'c', 'd'], 3)`,
      expectValue: [['a', 'b', 'c'], ['d']],
      actuallyValue: chunk(['a', 'b', 'c', 'd'], 3)
    },
  ]}
/>


## 3 实现 [`_.concat`](https://lodash.com/docs/4.17.15#concat)
<TestCase
  title="concat"
  items={[
    {
      title: `concat([1], 2, [3], [[4]])`,
      expectValue: [1, 2, 3, [4]],
      actuallyValue: concat([1], 2, [3], [[4]])
    },
    {
      title: `concat([1], 2, [3, 4, 5], [[4]])`,
      expectValue: [1, 2, 3,  4, 5, [4]],
      actuallyValue: concat([1], 2, [3, 4, 5], [[4]])
    },
  ]}
/>

## 计数器
<CountDemo />

