import React, { FC, useCallback } from 'react'
import normalize from '@site/src/utils/normalize'

export interface IButtonProps {
  type?: 'primary' | 'dashed' | 'outline' | 'text'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  onClick?: () => void
  children: JSX.Element
}

const Button: FC<IButtonProps> = ({
  type = 'primary',
  size = 'md',
  disabled = false,
  onClick= () => {},
  children
}) => {
  const borderColorStyle = (() => (
    normalize({
      'primary': 'border-transparent',
      'outline': !disabled ? 'border-indigo' : 'border-indigo-200',
      'text': 'border-transparent',
    }[type], 'border-transparent')
  ))()

  const boxShadowStyle = (() => (
    normalize({
      'text': ''
    }[type], 'shadow-md')
  ))()

  const bgColorStyle = (() => {
    if(!disabled) {
      return normalize({
        'primary': 'bg-indigo-500 hover:bg-indigo-400', // 注意，用模板字符串会导致类名失效。
        'outline': 'bg-white',
        'text': 'bg-white hover:bg-gray-100'
      }[type], 'bg-indigo-500 hover:bg-indigo-400')
    }
    return  normalize({
      'primary': 'bg-indigo-200',
      'outline': 'bg-white',
      'text': 'bg-white'
    }[type], 'bg-indigo-200')
  })()

  const textColorStyle = (() => (
    normalize({
      'primary': 'text-white',
      'outline': !disabled ? 'text-indigo-500 hover:text-indigo-400' : 'text-indigo-200',
      'text': !disabled ? 'text-indigo-500' : 'text-indigo-200'
    }[type], 'text-white')
  ))()

  const sizeStyle = (() => (
    normalize({
      'sm': 'h-7 px-4',
      'md': 'h-8 px-4',
      'lg': 'h-9 px-5'
    }[size], 'h-8 px-4')
  ))()

  const cursorStyle = (() => {
    if(disabled) {
      return 'cursor-not-allowed'
    }
    return 'cursor-pointer'
  })()


  const handleClick = useCallback(() => {
    if(disabled) {
      return
    }
    onClick() 
  }, [disabled])


  return (
    <div 
      className={`
        inline-flex items-center
        box-border
        rounded-sm
        ${boxShadowStyle}
        border border-solid ${borderColorStyle}
        ${bgColorStyle}
        ${sizeStyle}
        ${textColorStyle}
        ${cursorStyle}
      `}
      onClick={handleClick}
    >{children}</div>
  )
}
export default React.memo(Button)
