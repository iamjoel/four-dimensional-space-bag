
import React, { FC, useState } from 'react'

const AlignVer: FC = ({
}) => {
  const [align, setAlign] = useState('top');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement> ) => {
    setAlign(e.target.value)
  }

  const alignClassName = (() => {
    return {
      'top': 'items-start',
      'middle': 'items-center',
      'bottom': 'items-end',
    }[align]
  })()
  return (
    <div>
      <label className='block mb-2'>
        对齐方式：
        <select
          className='ml-1'
          value={align}
          onChange={handleChange}
        >
          <option>top</option>
          <option>middle</option>
          <option>bottom</option>
        </select>
      </label>
      
      <div className={`flex ${alignClassName} gap-4 h-40 rounded bg-stripes-indigo`}>
        <div className='grow h-16 rounded bg-indigo-500'></div>
        <div className='grow h-8 rounded bg-indigo-500'></div>
        <div className='grow h-32 rounded bg-indigo-500'></div>
      </div>
    </div>
  )
}
export default React.memo(AlignVer)
