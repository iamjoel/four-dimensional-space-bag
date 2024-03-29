import type { ReactNode } from 'react'
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

type IPortalAPI = {
  render: ({ children }: { children: JSX.Element }) => ReactNode
  remove: () => void
}

function usePortal(el: HTMLElement = document.body) {
  const [portal, setPortal] = React.useState<IPortalAPI>({
    render: () => null,
    remove: () => null,
  })

  const createPortal = React.useCallback((el) => {
    const Portal = ({ children }: { children: JSX.Element }) => ReactDOM.createPortal(children, el)
    const remove = () => ReactDOM.unmountComponentAtNode(el)
    return { render: Portal, remove }
  }, [])

  useEffect(() => {
    if (el)
      portal.remove()
    const newPortal = createPortal(el)
    setPortal(newPortal)
    return () => {
      newPortal.remove()
    }
  }, [el])

  return portal.render
}

export default usePortal
