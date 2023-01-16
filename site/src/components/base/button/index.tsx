import React, { FC } from 'react'
import normalize from '@site/src/utils/normalize'

export interface IButtonProps {
  type?: 'primary' | 'dashed' | 'outline' | 'text'
  children: JSX.Element
}

const Button: FC<IButtonProps> = ({
  type = 'primary', 
  children
}) => {
  const borderColor = (() => (
    normalize({
      'primary': 'border-transparent',
      'outline': 'border-indigo',
      'text': 'border-transparent',
    }[type], 'border-transparent')
  ))()

  const boxShadow = (() => (
    normalize({
      'text': ''
    }[type], 'shadow-md')
  ))()

  const bgColor = (() => (
    normalize({
      'primary': 'bg-indigo-500 hover:bg-indigo-400', // 注意，用模板字符串会导致类名失效。
      'outline': 'bg-white',
      'text': 'bg-white hover:bg-gray-100'
    }[type], 'bg-white')
  ))()

  const textColor = (() => (
    normalize({
      'primary': 'text-white',
      'outline': 'text-indigo-500 hover:text-indigo-400',
      'text': 'text-indigo-500'
    }[type], 'text-white')
  ))()

  return (
    <div className={`
      inline-block
      rounded-sm
      ${boxShadow}
      border  border-solid ${borderColor}
      ${bgColor}
      px-[15px]
      ${textColor}
      cursor-pointer
    `}
    >{children}</div>
  )
}
export default React.memo(Button)
