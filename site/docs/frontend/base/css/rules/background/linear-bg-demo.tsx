'use client'
import React, { FC } from 'react'
import data from './data'

type Props = {
  
}

const LinearBgDemo: FC<Props> = ({
}) => {
  return (
    <div className='grid grid-cols-4 gap-4'>
      {data.map((item, index) => (
        <div 
          key={item.name}
          className='w-full h-52 rounded-md bg-white'
          style={{
            background: item.css
          }}
        >

        </div>
      ))}
    </div>
  )
}
export default React.memo(LinearBgDemo)

