'use client'
import type { FC } from 'react'
import React, { useEffect, useState } from 'react'
import { Button } from '@arco-design/web-react'

type RES = {
  left: number
  right: number
  op: string
  res: number
}

// 20 以内加减法
function genRandomNumber(max = 10) {
  const res = Math.round((Math.random()) * max)
  if (res === 0)
    return 1

  if (res > max)
    return max

  return res
}
function genPlus() {
  const left = genRandomNumber()
  const right = genRandomNumber()
  return {
    left,
    right,
    op: '+',
    res: left + right,
  }
}

function genMinus() {
  const left = genRandomNumber(20)
  const right = genRandomNumber(left)
  return {
    left,
    right,
    op: '-',
    res: left - right,
  }
}

function gen() {
  return Math.random() > 0.5 ? genPlus() : genMinus()
}
const PlusMinus: FC = () => {
  const total = 100
  const [completedNum, setCompletedNum] = useState(0)
  const genNext = () => {
    setCompletedNum(completedNum + 1)
    setCurrent(gen())
  }
  const [current, setCurrent] = useState<RES>({})

  useEffect(() => {
    genNext()
  }, [])

  return (
    <div className='w-[300px] mx-auto'>
      <div className='flex items-center justify-center text-[80px]'>
        {current.left} {current.op} {current.right} =
      </div>
      <div className='mt-3 flex justify-between'>
        <div><span className='text-[#0f0]'>{completedNum}</span> / {total}</div>
        <Button type='primary' onClick={genNext}>下一题</Button>
      </div>
    </div>
  )
}
export default React.memo(PlusMinus)
