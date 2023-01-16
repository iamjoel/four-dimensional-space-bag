import React, { FC } from 'react'
import normalize from '@site/src/utils/normalize'

export interface IButtonProps {
  type?: 'primary' | 'dashed' | 'outline' | 'text'
  size?: 'sm' | 'md' | 'lg'
  children: JSX.Element
}

const Button: FC<IButtonProps> = ({
  type = 'primary',
  size = 'md',
  children
}) => {
  const borderColorStyle = (() => (
    normalize({
      'primary': 'border-transparent',
      'outline': 'border-indigo',
      'text': 'border-transparent',
    }[type], 'border-transparent')
  ))()

  const boxShadowStyle = (() => (
    normalize({
      'text': ''
    }[type], 'shadow-md')
  ))()

  const bgColorStyle = (() => (
    normalize({
      'primary': 'bg-indigo-500 hover:bg-indigo-400', // 注意，用模板字符串会导致类名失效。
      'outline': 'bg-white',
      'text': 'bg-white hover:bg-gray-100'
    }[type], 'bg-indigo-500 hover:bg-indigo-400')
  ))()

  const textColorStyle = (() => (
    normalize({
      'primary': 'text-white',
      'outline': 'text-indigo-500 hover:text-indigo-400',
      'text': 'text-indigo-500'
    }[type], 'text-white')
  ))()

  const sizeStyle = (() => (
    normalize({
      'sm': 'h-7 px-4',
      'md': 'h-8 px-4',
      'lg': 'h-9 px-5'
    }[size], 'h-8 px-4')
  ))()

  return (
    <div className={`
      inline-flex items-center
      box-border
      rounded-sm
      ${boxShadowStyle}
      border  border-solid ${borderColorStyle}
      ${bgColorStyle}
      ${sizeStyle}
      ${textColorStyle}
      cursor-pointer
    `}
    >{children}</div>
  )
}
export default React.memo(Button)
