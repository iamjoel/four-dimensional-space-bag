import type { FC, ReactNode } from 'react'
import React, { useRef } from 'react'

export enum Direction {
  hor = 'hor',
  ver = 'ver',
}

export type IInfiniteListProps = {
  height?: number // 滚动是垂直方向：viewport height
  width?: number // 滚动是水平方向：viewport width
  className?: string
  direction?: Direction
  onReachBottom: () => void
  isLoading: boolean
  isLoadAll: boolean
  children: ReactNode
}

const InfiniteList: FC<IInfiniteListProps> = ({
  direction = Direction.ver,
  className = '',
  height = 0,
  width = 0,
  children,
  isLoading,
  isLoadAll,
  onReachBottom,
}) => {
  const isVer = direction === Direction.ver
  const style = isVer
    ? {
      height,
    }
    : {
      width,
    }
  const wrapRef = useRef<HTMLDivElement>(null)

  const handleScroll = (event: MouseEvent) => {
    if (isLoading || isLoadAll)
      return

    const wrapElem = wrapRef.current
    if (!wrapElem)
      return

    const {
      scrollTop, scrollHeight, clientHeight,
      scrollLeft, scrollWidth, clientWidth,
    } = wrapElem
    const isReachBottom = isVer
      ? scrollTop + clientHeight === scrollHeight
      : scrollLeft + clientWidth === scrollWidth
    if (isReachBottom)
      onReachBottom()
  }
  return (
    <div
      ref={wrapRef}
      className={`${isVer ? 'overflow-y-auto' : 'flex items-center overflow-x-auto'} ${className}`}
      style={style}
      onScroll={handleScroll}
    >
      {children}
      {isLoading && <div className={!isVer ? 'flex-shrink-0 px-3' : 'text-center'}>加载中...</div>}
    </div>
  )
}

export default React.memo(InfiniteList)
