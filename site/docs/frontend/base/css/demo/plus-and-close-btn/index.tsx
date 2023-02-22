import React from 'react'

export const PlusBtn = ({
  className = ''
}) => {
  return (
    <div className={`
      relative
      flex justify-center items-center
      w-14 h-14 rounded-full
      bg-indigo-500
      ${className}
    `}>
      <div className="w-10 h-1 bg-white"></div>
      <div className="
        absolute top-2 left-1/2 -translate-x-1/2
        w-1 h-10 bg-white
      "></div>
    </div>
  )
}

export const CloseBtn = () => {
  return <PlusBtn className="rotate-45" />
}
