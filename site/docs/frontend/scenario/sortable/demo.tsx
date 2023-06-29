import React, { useState } from 'react'
import { ReactSortable } from 'react-sortablejs'

const listTemplate = [1, 2, 3].map(item => ({
  id: item,
  name: `Item ${item}`,
}))

function List() {
  const [list, setList] = useState(listTemplate)
  return (
    <ReactSortable
      className="space-y-1"
      list={list}
      setList={setList}
      handle='.handle'
      ghostClass="opacity-50"
      animation={150}
    >
      {list.map((o, index) => (
        <div className="flex h-8 px-1 items-center space-x-2 border border-solid border-gray-100 shadow-sm rounded-lg select-none" key={index}>
          <div className='handle flex items-center justify-center w-4 h-4 cursor-grab'>
            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M1 2C1.55228 2 2 1.55228 2 1C2 0.447715 1.55228 0 1 0C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2ZM1 6C1.55228 6 2 5.55228 2 5C2 4.44772 1.55228 4 1 4C0.447715 4 0 4.44772 0 5C0 5.55228 0.447715 6 1 6ZM6 1C6 1.55228 5.55228 2 5 2C4.44772 2 4 1.55228 4 1C4 0.447715 4.44772 0 5 0C5.55228 0 6 0.447715 6 1ZM5 6C5.55228 6 6 5.55228 6 5C6 4.44772 5.55228 4 5 4C4.44772 4 4 4.44772 4 5C4 5.55228 4.44772 6 5 6ZM2 9C2 9.55229 1.55228 10 1 10C0.447715 10 0 9.55229 0 9C0 8.44771 0.447715 8 1 8C1.55228 8 2 8.44771 2 9ZM5 10C5.55228 10 6 9.55229 6 9C6 8.44771 5.55228 8 5 8C4.44772 8 4 8.44771 4 9C4 9.55229 4.44772 10 5 10Z" fill="#98A2B3"/>
            </svg>
          </div>
          <div>{o.name}</div>
        </div>
      ))}
    </ReactSortable>
  )
}

export default React.memo(List)
