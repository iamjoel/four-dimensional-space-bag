import type { FC } from 'react'
import React, { useRef } from 'react'
import { useHover } from 'ahooks'
import ItemOperation from './item-operation'

function Item({ name }) {
  const ref = useRef(null)
  const isHovering = useHover(ref)
  return (
    <div
      ref={ref}
      className="flex h-8 items-center justify-between hover:bg-gray-200 px-2 rounded-lg text-sm font-normal"
    >
      <div>{name}</div>
      <div className="shrink-0 h-6">
        <ItemOperation
          isItemHovering={isHovering}
        />
      </div>
    </div>
  )
}
const OpDropdown: FC = () => {
  const list = ['Item1', 'Item2', 'Item3']
  return (
    <div>
      <div>移到item右侧，点击 按钮</div>
      <div className='w-[300px] p-1 space-y-1 bg-white rounded-md shadow-md'>
        {list.map(name => (
          <Item
            key={name}
            name={name}
          />
        ))}
      </div>
    </div>

  )
}
export default React.memo(OpDropdown)
