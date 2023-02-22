import React, { FC, useState, useEffect, useRef } from 'react'
export interface ISimpleSelectProps {
  list: {id: number, title: string}[]
  controlShow: number
  onChange: (value: number) => void
}

const SimpleSelect: FC<ISimpleSelectProps> = ({
  list,
  controlShow,
  onChange
}) => {
  const [isShow, setIsShow] = useState(false)
  const [count, didSetCount] = useState(0)
  const countRef = useRef(0)
  const setCount = (value: number) => {
    didSetCount(value)
    countRef.current = value
  }


  useEffect(() => {
    const hide = () => {
      setIsShow(false)
      setCount(countRef.current + 1)
    }
    document.addEventListener('click', hide)
    
    return () => {
      document.removeEventListener('click', hide)
    }
  }, [])

  useEffect(() => {
    const runId = setInterval(() => {
      // console.log(countRef.current)
    }, 3000)
    return () => {
      clearInterval(runId)
    }
  }, [])

  useEffect(() => {
    if(controlShow) {
      setIsShow(true)
    }
  }, [controlShow])

  return (
    <div className='relative w-24 text-white cursor-pointer' onClick={(e: MouseEvent) => {
      e.stopPropagation();
      (e as any).nativeEvent.stopImmediatePropagation()
    }}>
      {/* <div style={{color: 'green'}}>count: {count}</div> */}
      <div className='px-2 h-8 leading-8 border bg-green-500' onClick={() => {setIsShow(true)}}>请选择</div>
      <div className='absolute top-8 w-full'
        style={{
          display: isShow ? 'block' : 'none'
        }}
      >
        {list.map(item => (
          <div
            key={item.id}
            className='px-2 h-8 leading-8 border border-b bg-green-600'
            onClick={() => {
              onChange(item.id)
              setIsShow(false)
            }}
          >{item.title}</div>
        ))}
      </div>
    </div>
  )
}

export const SimpleSelectDemo = () => {
  const [selected, setSelected] = useState('')
  const [controlShow, setControlShow] = useState(0)
  return (
    <div>
      选中值: {selected === '' ? '未选择' : selected}。 
      <button onClick={() => setControlShow(Date.now())}>点我弹出选项</button>
      <SimpleSelect
        list={[
          {
            id: 1,
            title: '选项1'
          },
          {
            id: 2,
            title: '选项2'
          },
          {
            id: 3,
            title: '选项3'
          },
        ]}
        onChange={setSelected}
        controlShow={controlShow}
      />
    </div>
  )
}

export default React.memo(SimpleSelect)
