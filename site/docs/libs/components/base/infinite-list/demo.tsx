import React, { FC, ReactNode, useState, useEffect } from 'react'
import { useBoolean } from 'ahooks'
import InfiniteList from '.'

const InfiniteListDemo = () => {
  const [list, setList] = useState([])
  const [page, setPage] = useState(1)
  const [isLoadAll, {setTrue: setLoadAll}] = useBoolean(false)
  const [isLoading, {setTrue: setIsLoading, setFalse: stopLoading}] = useBoolean(false)

  const fetchNextPage = async () => {
    setIsLoading()
    const res = await fetchList(page)
    stopLoading()
    setList([...list, ...res.list])
    setPage(page + 1)
    if(res.isLoadedAll) {
      setLoadAll()
    }
  }

  useEffect(() => {
    fetchNextPage()
  }, [])

  return (
    <InfiniteList
      className="w-40"
      height={130} // 1条20
      isLoading={isLoading}
      isLoadAll={isLoadAll}
      onReachBottom={fetchNextPage}
    >
      {
        list.map(item => (
          <div
            key={item.id}
            className="h-5 shadow-md pl-3"
          >{item.name}</div>
        ))
      }
    </InfiniteList>
  )
}

interface IListResult {
  isLoadedAll: boolean
  list: {id: number, name: string}[]
}

const fetchList = (page = 1): Promise<IListResult> => {
  if(page > 5) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          isLoadedAll: true,
          list: []
        })
      }, 1000)
    })
  } else {
    const list = []
    const start = (page - 1) * 10
    for(let i = 1; i < 11; i++) {
      let id = start + i
      list.push({
        id,
        name: `Holly ${id}`
      })
    }
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          isLoadedAll: false,
          list
        })
      }, 1000)
    })
  }
}

export default InfiniteListDemo
