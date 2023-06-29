import React from 'react'

type INameContext = {
  name: string
  setName: (name: string) => void
}

const NameContext = React.createContext<INameContext>({
  name: '',
  setName: () => null,
})

export default NameContext
