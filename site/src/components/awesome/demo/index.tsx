import React, { FC } from 'react'
import BrowserOnly from '@docusaurus/BrowserOnly'

import cn from 'clsx'

interface IDemo {
  children: JSX.Element
  contentSize?: 'sm' | 'md' | 'lg' | 'full'
  padding?: string
  className?: string
  browserOnly?: boolean
}

const Demo: FC<IDemo> = ({
  children,
  contentSize = 'full',
  padding = 'p-12',
  className,
  browserOnly
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

  const main = (
    <div className={`
      mb-2
      rounded-sm
      border border-solid border-gray-100 
      shadow-md
      ${padding}
    `}>
      <div className={cn(maxWidthStyle, 'mx-auto', className)}>
        {children}
      </div>
    </div>
  )
  return (
    <>
      {browserOnly ? 
        <BrowserOnly>{() => <>{main}</>}</BrowserOnly> :
        main
      }
    </>
  )
}

export default Demo