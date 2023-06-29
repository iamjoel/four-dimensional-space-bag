import React, { useEffect, useState } from 'react'
import { useBoolean } from 'ahooks'
import cn from 'clsx'

import InfiniteList, { Direction } from '.'

const ITEM_HEIGHT = 28
const ITEM_WIDTH = 80
const ITEM_COUNT = 6.5

function InfiniteListDemo({ dir = Direction.ver }: { dir: Direction }) {
  const isVer = dir === Direction.ver
  const [list, setList] = useState([])
  const [page, setPage] = useState(1)
  const [isLoadAll, { setTrue: setLoadAll }] = useBoolean(false)
  const [isLoading, { setTrue: setIsLoading, setFalse: stopLoading }] = useBoolean(false)

  const fetchNextPage = async () => {
    setIsLoading()
    const res = await fetchList(page)
    stopLoading()
    setList([...list, ...res.list])
    setPage(page + 1)
    if (res.isLoadedAll)
      setLoadAll()
  }

  useEffect(() => {
    fetchNextPage()
  }, [])

  return (
    <div className={cn('mx-auto', isVer ? 'w-24' : 'w-[520px]')}>
      <InfiniteList
        height={ITEM_HEIGHT * ITEM_COUNT}
        width={ITEM_WIDTH * ITEM_COUNT}
        isLoading={isLoading}
        isLoadAll={isLoadAll}
        onReachBottom={fetchNextPage}
        direction={dir}
      >
        {
          list.map(item => (
            <div
              key={item.id}
              className={cn('h-7 leading-7 shadow-md pl-3', !isVer && 'w-20 flex-shrink-0')}
            >{item.name}</div>
          ))
        }
      </InfiniteList>
    </div>

  )
}

type IListResult = {
  isLoadedAll: boolean
  list: { id: number; name: string }[]
}

function fetchList(page = 1): Promise<IListResult> {
  if (page > 5) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          isLoadedAll: true,
          list: [],
        })
      }, 1000)
    })
  }
  else {
    const list = []
    const start = (page - 1) * 10
    for (let i = 1; i < 11; i++) {
      const id = start + i
      list.push({
        id,
        name: `Holly ${id}`,
      })
    }
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          isLoadedAll: false,
          list,
        })
      }, 1000)
    })
  }
}

export default InfiniteListDemo
