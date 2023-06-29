import type { FC } from 'react'
import React, { useEffect, useRef, useState } from 'react'
import { Button } from '@arco-design/web-react'
import scrollTo from '@site/src/utils/dom/scroll-to-elem'

const ButtonGroup = Button.Group

enum Color {
  red, green, blue,
}

enum Dir {
  HOR = 'hor',
  VER = 'ver',
}

const ScrollToElem: FC = ({
}) => {
  const [current, setCurrent] = useState<Color>(Color.red)
  const [dir, setDir] = useState<Dir>(Dir.VER)
  const isVer = dir === Dir.VER

  const wrapElemRef = useRef<HTMLElement>(null)
  const redElemRef = useRef<HTMLElement>(null)
  const greenElemRef = useRef<HTMLElement>(null)
  const blueElemRef = useRef<HTMLElement>(null)

  const colorRefMap = {
    [Color.red]: redElemRef,
    [Color.green]: greenElemRef,
    [Color.blue]: blueElemRef,
  }

  useEffect(() => {
    const scrollToElem = colorRefMap[current]
    scrollTo(wrapElemRef.current, scrollToElem.current, isVer)
  }, [current])

  return (
    <div>
      <div className='flex items-center mb-3'>
        滚动方向:
        <ButtonGroup className='ml-3'>
          <Button
            type={dir === Dir.HOR ? 'primary' : 'outline'} shape='round'
            onClick={() => setDir(Dir.HOR)}
          >水平</Button>
          <Button
            type={dir === Dir.VER ? 'primary' : 'outline'} shape='round'
            onClick={() => setDir(Dir.VER)}
          >竖直</Button>
        </ButtonGroup>
      </div>
      <div className='flex items-center mb-3'>
        滚动到:
        <ButtonGroup className='ml-3'>
          <Button
            type={current === Color.red ? 'primary' : 'outline'} shape='round'
            onClick={() => setCurrent(Color.red)}
          >红</Button>
          <Button
            type={current === Color.green ? 'primary' : 'outline'} shape='round'
            onClick={() => setCurrent(Color.green)}
          >绿</Button>
          <Button
            type={current === Color.blue ? 'primary' : 'outline'} shape='round'
            onClick={() => setCurrent(Color.blue)}
          >蓝</Button>
        </ButtonGroup>
      </div>
      <div ref={wrapElemRef} className={
        `${isVer ? 'overflow-y-scroll' : 'flex overflow-x-scroll'}
        w-52 h-52`
      }>
        <div ref={redElemRef} className={`${isVer ? 'h-52' : 'w-52 shrink-0'} bg-red-500`}></div>
        <div ref={greenElemRef} className={`${isVer ? 'h-52' : 'w-52 shrink-0'} bg-green-500`}></div>
        <div ref={blueElemRef} className={`${isVer ? 'h-52' : 'w-52 shrink-0'} bg-blue-500`}></div>
      </div>
    </div>

  )
}

export default React.memo(ScrollToElem)
