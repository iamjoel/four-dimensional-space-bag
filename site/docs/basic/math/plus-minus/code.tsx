'use client'
import type { FC } from 'react'
import React, { useEffect, useState } from 'react'
import { Button, Message, Progress } from '@arco-design/web-react'
import { useGetState } from 'ahooks'
import BrowserOnly from '@site/src/components/awesome/browser-only'

type RES = {
  left: number
  right: number
  op: string
  res: number
}
// 到50题结束。实时的总时间；错误放出来；
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
  const [isStart, setIsStart, getIsStart] = useGetState(false)
  const total = 50
  const [completedNum, setCompletedNum] = useState(0)
  const [isCompleted, setIsCompleted, getIsCompleted] = useGetState(false)
  const [seconds, setSeconds, getSeconds] = useGetState(0)
  const completedTime = (() => {
    const minutes = Math.floor(seconds / 60)
    const resSeconds = seconds % 60
    return `${minutes > 0 ? `${minutes}分` : ''}${resSeconds}秒`
  })()
  const EACH_TIME = 3
  const [countDown, setCountDown, getCountDown] = useGetState(EACH_TIME)
  const [current, setCurrent] = useState<RES>({})
  const [errorList, setErrorList] = useState([])

  const genNext = () => {
    setCompletedNum(completedNum + 1)
    setCurrent(gen())
    setCountDown(EACH_TIME)
  }
  const [res, setRes] = useState('')
  const handleOnEnter = () => {
    if (Number.parseInt(res) !== current.res) {
      setErrorList([...errorList, `${current.left} ${current.op} ${current.right} = ${res}`])
      Message.error('错了')
      setRes('')
      return
    }
    if (completedNum === total) {
      setIsCompleted(true)
      return
    }
    setRes('')
    genNext()
  }

  useEffect(() => {
    genNext()
    const runId = setInterval(() => {
      if (!getIsStart())
        return

      if (!getIsCompleted())
        setSeconds(getSeconds() + 1)

      const nextCountDown = getCountDown() - 1
      if (nextCountDown >= 0)
        setCountDown(nextCountDown)
    }, 1000)
    return () => {
      clearInterval(runId)
    }
  }, [])

  if (!isStart) {
    return (
      <div className='p-3 shadow-lg'>
        <div className='mb-3'>要求：50道，一道不超过 3 秒。</div>
        <Button size="large" type='primary' onClick={() => setIsStart(true)}>开始</Button>
      </div>
    )
  }

  if (isCompleted) {
    return (<div className='p-3 shadow-lg text-base'>
      <div className='flex space-x-2'>
        <div>用时间：{completedTime}</div>
        <div>错误数：{errorList.length}</div>
      </div>
      {errorList.length > 0 && (
        <div className='space-y-1'>
          <div className='mt-2 mb-1'>错误题目:</div>
          {errorList.map((item, index) => (
            <div key={item}>{index + 1}. {item}</div>
          ))}
        </div>
      )}

    </div>)
  }

  return (
    <BrowserOnly>
      <div className='p-3 shadow-lg'>
        <Progress percent={countDown / EACH_TIME * 100} showText={false} />
        <div className='text-[#f00] h-[22px]'>{countDown === 0 ? '超时了' : ' '}</div>
        <div className='mt-3 mb-1 flex justify-between'>
          <div><span className='text-[#0f0]'>{completedNum}</span> / {total}</div>
          {/* <Button type='primary' onClick={genNext}>下一题</Button> */}
        </div>
        <div className='flex text-[80px]'>
          {current.left} {current.op} {current.right} = {res}
        </div>

        <Keyboard
          value={res}
          onChange={setRes}
          onEnter={handleOnEnter}
        />
      </div >
    </BrowserOnly>
  )
}
export default PlusMinus
