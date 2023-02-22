import React, { FC, useState } from 'react'
import NameContext from './name-context'
import Deepest from './child/deepest'

import ChildComp from './child'

const UseContextDemo: FC = () => {
  const [name, setName] = useState('改我试试')

  return (
    <NameContext.Provider value={{
      name,
      setName
    }}>
      值: <input value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}></input>
      <ChildComp name="第一级子元素">
        <ChildComp name="第二级子元素">
          <ChildComp name="第三级子元素">
              <Deepest />
          </ChildComp>
        </ChildComp>
      </ChildComp>
    </NameContext.Provider>
  )
}

export default React.memo(UseContextDemo)
