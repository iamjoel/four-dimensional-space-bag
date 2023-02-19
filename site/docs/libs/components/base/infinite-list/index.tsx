import React, { FC, ReactNode, useState, useRef } from 'react'
export interface IInfiniteListProps {
  height: number // viewport height
  className?: string
  onReachBottom: () => void
  isLoading: boolean
  isLoadAll: boolean
  children: ReactNode
}

// useList([wrapRef, isLoading, onReachBottom ])

const InfiniteList: FC<IInfiniteListProps> = ({
  className = '',
  height,
  children,
  isLoading,
  isLoadAll,
  onReachBottom
}) => {
  const wrapRef = useRef<HTMLDivElement>(null)
  const handleScroll = (event: MouseEvent) => {
    if(isLoading || isLoadAll) {
      return
    }
    const wrapElem = wrapRef.current
    if(!wrapElem) {
      return
    }
    const { scrollTop, scrollHeight, clientHeight } = wrapElem
    const isReachBottom = scrollTop + clientHeight  === scrollHeight
    if (isReachBottom) {
      onReachBottom()
    }
  }
  return (
    <div
      ref={wrapRef}
      className={`overflow-y-auto ${className}`}
      style={{
        height
      }}
      onScroll={handleScroll} 
    >
      {children}
      {isLoading && <div>加载中...</div>}
    </div>
  )
}

export default React.memo(InfiniteList)
