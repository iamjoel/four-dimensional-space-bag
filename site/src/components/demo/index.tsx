import React from 'react'

interface IDemo {
  children: JSX.Element
}

const Demo = ({
  children
}) => {
  return (
    <div className="
      mb-2
      rounded-sm
      border border-solid border-gray-100 
      shadow-md
      p-[48px]
      space-x-3
    ">{children}</div>
  )
}

export default Demo