import React, { FC, useState, useEffect,  useRef } from 'react'
import { Button } from "@arco-design/web-react"
const ButtonGroup = Button.Group

enum Color {
  red, green, blue
}

const ScrollToElem: FC = ({
}) => {
  const [current, setCurrent] = useState<Color>(Color.red)

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
    scrollTo(wrapElemRef.current, scrollToElem.current)
  }, [current])

  return (
    <div>
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
      <div ref={wrapElemRef} className='overflow-y-scroll w-52 h-52'>
        <div ref={redElemRef} className='h-52 bg-red-500'></div>
        <div ref={greenElemRef} className='h-52 bg-green-500'></div>
        <div ref={blueElemRef} className='h-52 bg-blue-500'></div>
      </div>
    </div>
    
  )
}

export default React.memo(ScrollToElem)

const scrollTo = (wrapElem, targetElem) => {
  if(wrapElem && targetElem) {
    // top: 距浏览器视口位置
    const { top: wrapTop } = wrapElem.getBoundingClientRect()
    const wrapScrollTop = wrapElem.scrollTop
    const { top: childTop} = targetElem.getBoundingClientRect()
    const scrollY = childTop - wrapTop + wrapScrollTop// 浏览器网上滚动了，子元素的top就小了滚动值
    wrapElem.scrollTo({
      top: scrollY,
      behavior: 'smooth',
    })
  }
}
