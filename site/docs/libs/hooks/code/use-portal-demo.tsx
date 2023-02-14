import React, { useRef, useState, useCallback } from 'react'
import { useBoolean, useClickAway } from 'ahooks'
import usePortal from '@site/src/hooks/use-portal'

const Demo: React.FC = () => {
  const Portal = usePortal()
  const [isShow, {setTrue: show, setFalse: hide}] = useBoolean(false)
  const [pos, setPos] = useState({left: 0, top: 0})
  const wrapRef = useRef<HTMLDivElement>(null)

  const handleShow = useCallback((e: MouseEvent) => {
    const pageScrollY = document.body.getBoundingClientRect().top
    setPos({
      left: e.pageX,
      top: e.pageY + pageScrollY,
    })
    show()
  }, [])
  useClickAway(() => {
    hide()
  }, wrapRef)
  return (
    <div 
      className='
        flex justify-center items-center
        h-20
        shadow overflow-hidden
        text-center cursor-pointer
      '
      onClick={handleShow}
      ref={wrapRef}
    >
      这是一个超出 overflow: hidden 的元素。点我弹出内容。
      <Portal>
        <div
          className='fixed p-3 rounded bg-indigo-500 text-white'
          style={{
            display: isShow ? 'block' : 'none',
            left: pos.left,
            top: pos.top,
          }}
        >
            子元素内容
        </div>
      </Portal>
    </div>
  )
}

export default Demo