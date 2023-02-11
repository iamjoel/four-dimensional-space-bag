import React, { FC, useState } from 'react'
import Select from './index'

const fruitList = [
  {
    value: 1,
    label: '荔枝'
  },
  {
    value: 2,
    label: '香蕉'
  },
  {
    value: 3,
    label: '菠萝'
  },
]

export const SelectDemo: FC = ({
  showInTop
}) => {
  const [fruit, setFruit] = useState('')
  return (
    <div>
      <div className='flex items-center mb-2 space-x-3'>
        <span>水果选择：</span>
        <Select
          value={fruit}
          onChange={setFruit}
          options={fruitList}
          showInTop={showInTop}
        />
      </div>
      <span>选中水果ID: {fruit || 'null'}</span>
    </div>
  )
}

export default React.memo(SelectDemo)
