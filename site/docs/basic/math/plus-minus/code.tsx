'use client'
import type { FC } from 'react'
import React, { useEffect, useState } from 'react'
import { Button, Message, Progress } from '@arco-design/web-react'
import { useGetState } from 'ahooks'

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

function Keyboard({
  value,
  onChange,
  onEnter,
}) {
  const rows = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ['<-', 0, 'E'],
  ]
  const handleClick = (text) => {
    switch (text) {
      case '<-':
        onChange(value.slice(0, -1))
        break
      case 'E':
        onEnter()
        break
      default:
        onChange(`${value}${text}`)
    }
  }

  const Item = ({ text }) => {
    return <Button className='!w-[80px] !h-[80px] !text-[20px]' onClick={() => handleClick(text)}>{text}</Button>
  }

  const renderRow = (row, index) => {
    return (
      <div className='flex items-center space-x-3' key={index}>
        {row.map((text) => {
          return (<Item text={text} key={text} />)
        })}
      </div>
    )
  }

  return (
    <div className='space-y-3'>
      {rows.map((row, index) => renderRow(row, index))}
    </div>
  )
}
const PlusMinus: FC = () => {
  const total = 100
  const [completedNum, setCompletedNum] = useState(0)
  const EACH_TIME = 5
  const [countDown, setCountDown, getCountDown] = useGetState(EACH_TIME)
  const [current, setCurrent] = useState<RES>({})

  const genNext = () => {
    setCompletedNum(completedNum + 1)
    setCurrent(gen())
    setCountDown(EACH_TIME)
  }
  const [res, setRes] = useState('')
  const handleOnEnter = () => {
    if (Number.parseInt(res) !== current.res) {
      Message.error('错了')
      setRes('')
      return
    }
    setRes('')
    genNext()
  }

  useEffect(() => {
    genNext()
    const runId = setInterval(() => {
      const nextCountDown = getCountDown() - 1
      if (nextCountDown >= 0)
        setCountDown(nextCountDown)
    }, 1000)
    return () => {
      clearInterval(runId)
    }
  }, [])

  return (
    <div className='mx-auto'>
      <Progress percent={countDown / EACH_TIME * 100} showText={false} />
      <div className='text-[#f00] h-[22px]'>{countDown === 0 ? '超时了' : ' '}</div>
      <div className='flex text-[80px]'>
        {current.left} {current.op} {current.right} = {res}
      </div>

      <Keyboard
        value={res}
        onChange={setRes}
        onEnter={handleOnEnter}
      />
      <div className='mt-3 pb-10 flex justify-between'>
        <div><span className='text-[#0f0]'>{completedNum}</span> / {total}</div>
        {/* <Button type='primary' onClick={genNext}>下一题</Button> */}
      </div>
    </div>
  )
}
export default React.memo(PlusMinus)
