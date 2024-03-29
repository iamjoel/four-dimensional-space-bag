import type { FC } from 'react'
import React, { useCallback, useState } from 'react'

export type ICountProps = {
  value: number
  onChange: (value: number) => void
}

const Count: FC<ICountProps> = ({
  value,
  onChange,
}) => {
  const handleMinus = useCallback(() => {
    onChange(value - 1)
  }, [value])

  const handlePlus = useCallback(() => {
    onChange(value + 1)
  }, [value])

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (!/^[0-9]+$/.test(value))
      return

    onChange(Number.parseInt(value))
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
        onClick={handleMinus}
      >-</div>

      <input
        type='text'
        className='w-24'
        value={value}
        onChange={handleChange}
      />

      <div
        className='
          w-6 h-6 leading-6
          rounded-full
          bg-indigo-500
          text-center text-white
          cursor-pointer
        '
        onClick={handlePlus}
      >+</div>
    </div>

  )
}

export function CountDemo() {
  const [value, setValue] = useState(10)

  return (
    <div>
      <Count
        value={value}
        onChange={setValue}
      />
      <div>当前值: {value}</div>
    </div>
  )
}

export default React.memo(Count)
