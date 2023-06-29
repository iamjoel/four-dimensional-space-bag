import type { FC, ReactNode } from 'react'
import React from 'react'

export type IChildProps = {
  name: string
  children?: ReactNode
}

const Child: FC<IChildProps> = ({
  name,
  children,
}) => {
  return (
    <div>
      {name}
      <div style={{ paddingLeft: '2em' }}>
        {children}
      </div>
    </div>
  )
}
export default React.memo(Child)
