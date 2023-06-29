import type { FC } from 'react'
import React, { useEffect, useState } from 'react'
import s from './style.module.css'

export type ISlider = {
  current: number
  total: number
  totalWidth?: number
  disabled?: boolean
  onChange?: (current: number) => void
}

const TOTAL_WIDTH = 624
const HANDLE_OFFSET = 6

const Slider: FC<ISlider> = ({
  current: _current,
  total,
  totalWidth = TOTAL_WIDTH,
  disabled,
  onChange,
}) => {
  const current = (() => {
    if (_current < 0)
      return 0

    if (_current > total)
      return total

    return _current
  })()
  const percent = current / total
  const left = totalWidth * percent

  const [clientX, setClientX] = useState(0)
  const [prevUserSelectStyle, setPrevUserSelectStyle] = useState(getComputedStyle(document.body).userSelect)
  const [isMoving, setIsMoving] = useState(false)

  const handleStartMove = (e: React.MouseEvent<HTMLElement>) => {
    if (disabled)
      return

    setClientX(e.clientX)
    setIsMoving(true)
    setPrevUserSelectStyle(getComputedStyle(document.body).userSelect)
    document.body.style.userSelect = 'none'
  }

  const handleStopMove = () => {
    setIsMoving(false)
    document.body.style.userSelect = prevUserSelectStyle
  }

  const handleMove = (e: any) => {
    if (disabled || !isMoving)
      return

    const offset = e.clientX - clientX
    // debugger
    const resLeft = left + offset
    if (resLeft < 0 || resLeft > totalWidth)
      return

    setClientX(e.clientX)
    let nextCurrent = resLeft * total / totalWidth
    if (nextCurrent < 0.1) { // 不容易碰到0的情况
      nextCurrent = 0
    }
    if (total - nextCurrent < 0.1)
      nextCurrent = total

    onChange(nextCurrent) // 新的current
  }

  useEffect(() => {
    document.addEventListener('mouseup', handleStopMove)
    document.addEventListener('mousemove', handleMove)
    return () => {
      document.removeEventListener('mouseup', handleStopMove)
      document.removeEventListener('mousemove', handleMove)
    }
  }, [handleStopMove, handleMove])

  return (
    <div className={s.timeLine} style={{
      width: totalWidth,
      opacity: disabled ? 0.6 : 1,
    }}>
      <div className={s.progress} style={{
        width: left,
      }}></div>
      <div
        className={s.handler}
        onMouseDown={handleStartMove}
        style={
          {
            left: left - HANDLE_OFFSET,
            cursor: disabled ? 'not-allowed' : 'pointer',
          }
        }
      ></div>
    </div>
  )
}

export default React.memo(Slider)
