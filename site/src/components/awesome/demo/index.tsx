import React from 'react'
import cn from 'clsx'

interface IDemo {
  children: JSX.Element
  contentSize: 'sm' | 'md' | 'lg' | 'full'
  className?: string
}

const Demo = ({
  children,
  contentSize = 'full',
  className
}) => {
  const maxWidthStyle = (() => {
    if(contentSize === 'full') {
      return ''
    }
    return (
      {
        'sm': 'max-w-sm',
        'md': 'max-w-md',
        'lg': 'max-w-lg',
      }[contentSize]
    )
  })()
  return (
    <div className="
      mb-2
      rounded-sm
      border border-solid border-gray-100 
      shadow-md
      p-12
    ">
      <div className={cn(maxWidthStyle, 'mx-auto', className)}>
        {children}
      </div>
    </div>
  )
}

export default Demo