import type { FC } from 'react'
import React from 'react'

const Cup: FC = ({
}) => {
  return (
    <div className="
      flex flex-col
      mx-auto
      w-2/3 h-28
      text-white
    ">
      <div className="h-6 shrink-0 bg-indigo-500 text-center ">header</div>
      <div className="grow flex bg-red-500">
        <div className="flex justify-center items-center w-12 shrink-0 bg-lime-500">left</div>
        <div className="flex justify-center items-center  grow bg-orange-500">center</div>
        <div className="flex  justify-center items-center w-12 shrink-0 bg-lime-500">right</div>
      </div>
      <div className="h-6 shrink-0 bg-indigo-500 text-center text-white">footer</div>
    </div>
  )
}
export default React.memo(Cup)
