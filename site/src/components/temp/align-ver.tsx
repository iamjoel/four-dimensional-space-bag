
import React, { FC, useState } from 'react'
import { Button } from "@arco-design/web-react"
const ButtonGroup = Button.Group

const AlignVer: FC = ({
}) => {
  const [align, setAlign] = useState('top');

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
        <ButtonGroup>
          <Button 
            type={align === 'top' ? 'primary' : 'outline'} shape='round'
            onClick={() => setAlign('top')}
          >top</Button>
          <Button 
            type={align === 'middle' ? 'primary' : 'outline'} shape='round'
            onClick={() => setAlign('middle')}
          >middle</Button>
          <Button 
            type={align === 'bottom' ? 'primary' : 'outline'} shape='round'
            onClick={() => setAlign('bottom')}
          >bottom</Button>
        </ButtonGroup>
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
