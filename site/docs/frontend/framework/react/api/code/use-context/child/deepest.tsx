import type { FC } from 'react'
import React, { useContext } from 'react'
import NameContext from '../name-context'

const Deepest: FC = () => {
  const { name, setName } = useContext(NameContext)
  return (
    <div>
      值：<input value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}></input>
    </div>
  )
}
export default React.memo(Deepest)
