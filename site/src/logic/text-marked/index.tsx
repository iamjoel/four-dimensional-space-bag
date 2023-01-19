import React, { FC } from 'react'

export interface ITextMarkedProps {
  title: string,
  children: JSX.Element,
  author: string
}

const TextMarked: FC<ITextMarkedProps> = ({
  title,
  children,
  author,
}) => {
  return (
    <div className="
      mx-auto
      rounded
      w-[500px]
      p-4
      bg-purple-400
      text-white
    ">
      <div className="flex justify-center">
        <div className="
          flex justify-center items-center 
          rounded-full
          w-10 h-10
          bg-indigo-500
          text-center mb-3 text-xl
        ">摘</div>
      </div>

      <div className="mb-2 text-sm">{title}</div>

      <div className="
        mb-3
        leading-tight
        text-base font-bold
      "
      >{children}</div>
      <div className="text-right text-xs">-- {author}</div>
    </div>
  )
}

export default React.memo(TextMarked)
