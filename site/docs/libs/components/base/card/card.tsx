import React, { FC } from 'react'
import cn from 'clsx'
export interface ICardProps {
  className?: string
  title?: string
  children?: JSX.Element
  extra?: JSX.Element
}
const Card: FC<ICardProps> = ({
  className,
  title,
  children,
  extra
}) => {
  return (
    <div className={
      cn(`
        flex items-center justify-between
        rounded-sm
        hover:shadow-md
        border border-solid border-gray-200
        p-4
      `, className)
    }>
      <div>
        {children ? children : (
          <div>{title}</div>
        ) }
      </div>
      {extra}
    </div>
  )
}
export default React.memo(Card)
