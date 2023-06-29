import type { FC, ReactNode } from 'react'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useBoolean, useClickAway } from 'ahooks'
import ReactDOM from 'react-dom'

import s from './style.module.css'

type IMenus = {
  key: string
  node: ReactNode
}[]

export type IContextProps = {
  menus: IMenus
  onAction: (action: string) => void
  children: JSX.Element
  className?: string
}
const Context: FC<IContextProps> = ({
  menus,
  onAction,
  children,
  className = '',
}) => {
  const [isShow, { setTrue: showMenu, setFalse: hideMenu }] = useBoolean(false)
  const [pos, setPos] = useState({ left: 0, top: 0 })
  const handleContextMenu = (e: any) => {
    e.preventDefault()
    showMenu()
    setPos({
      left: e.pageX,
      top: e.pageY,
    })
  }

  const menuWrapRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (!isShow || !menuWrapRef.current)
      return

    const pageHeight = window.innerHeight
    const { height } = menuWrapRef.current.getBoundingClientRect()
    if (pos.top + height > pageHeight) { // 下面间距不够，往上翻
      setPos({
        ...pos,
        top: pos.top - height,
      })
    }
  }, [pos.left])

  useClickAway(() => {
    hideMenu()
  }, menuWrapRef)

  const handleAction = (action: string) => () => {
    hideMenu()
    onAction(action)
  }

  const Portal: any = usePortal(document.body)

  return (
    <div
      className={`${s.wrap} ${className}`}
      onContextMenu={handleContextMenu}
    >
      {children}
      <Portal>
        <div
          className={s.menuWrap}
          style={{
            left: pos.left,
            top: pos.top,
            display: isShow ? 'block' : 'none',
          }}
          ref={menuWrapRef}
        >
          {menus.map(m => (
            <div
              key={m.key}
              className={s.menuItem}
              onClick={handleAction(m.key)}>
              {m.node}
            </div>
          ))}
        </div>
      </Portal>
    </div>
  )
}

export default React.memo(Context)

type IPortalAPI = {
  render: ({ children }: { children: JSX.Element }) => ReactNode
  remove: () => void
}

function usePortal(el: HTMLElement) {
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
