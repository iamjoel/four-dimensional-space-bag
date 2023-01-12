import React, { FC } from 'react'
import cn from 'clsx'

export interface IButtonProps {
  type?: 'primary' | 'dashed' | 'outline' | 'text'
  children: JSX.Element
}

const PRIMARY_COLOR = 'indigo'

const Button: FC<IButtonProps> = ({
  type = 'primary', 
  children
}) => {
  const colorCls = (() => {
    let bgColor = ''
    let textColor = ''
    let borderColor = ''
    switch(type) {
      case 'primary':
        bgColor = PRIMARY_COLOR
        textColor = 'white'
        borderColor = 'transparent'
        break
      case 'outline':
        bgColor = 'white'
        textColor = PRIMARY_COLOR
        borderColor = PRIMARY_COLOR
    }
    return cn(
      `bg-${bgColor}-500`, `hover-bg-${bgColor}-600`,
      `text-${textColor}`)
  })()


  return (
    <div className={`
      inline-block
      rounded-sm
      border-1 border-transparent border-solid
      shadow-md
      px-[15px]
      ${colorCls}
      cursor-pointer
    `}
    >{children}</div>
  )
}
export default React.memo(Button)
