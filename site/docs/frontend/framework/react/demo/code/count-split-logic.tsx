import React, { FC, useCallback, useState } from 'react'
import count from './count'
import useCount from './hooks/use-count'

// import s from './style.module.css'
export interface ICountProps {
  value: number
  maxValue: number
  onChange: (value: number) => void
}

const Count: FC<ICountProps> = ({
  value,
  maxValue,
  onChange
}) => {
  const {
    minus,
    plus,
    isValid,
    isMax
  } = useCount({
    value,
    maxValue,
    setValue: onChange
  })

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if(!isValid(value)) {
      return
    }
    onChange(parseInt(value))
  }, [])

  return (
    <div className='flex space-x-1'>
      <div 
        className='
          w-6 h-6 leading-6
          rounded-full
          bg-indigo-500
          text-center text-white
          cursor-pointer
        '
        onClick={minus}
      >-</div>

      <input
        type='text'
        className='w-24'
        value={value}
        onChange={handleChange}
      />
      {!isMax && (
        <div 
          className='
            w-6 h-6 leading-6
            rounded-full
            bg-indigo-500
            text-center text-white
            cursor-pointer
          '
          onClick={plus}
        >+</div>
      )}
    </div>

  )
}

export const CountSplitLogicDemo = () => {
  const [value, setValue] = useState(10)
  return (
    <div>
      <Count
        value={value}
        maxValue={12}
        onChange={setValue}
      />
      <div>当前值: {value}</div>
    </div>
  )
}

export default React.memo(Count)
