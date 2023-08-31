'use client'
import type { FC } from 'react'
import React, { useEffect, useRef, useState } from 'react'
import cn from 'classnames'
import { useBoolean } from 'ahooks'

import { PortalToFollowElem, PortalToFollowElemContent, PortalToFollowElemTrigger } from '../portal-to-follow-elem'
import s from './style.module.css'

export type IItemOperationProps = {
  className?: string
  isItemHovering: boolean
  isPinned: boolean
  isShowRenameConversation?: boolean
  onRenameConversation?: () => void
  isShowDelete: boolean
  togglePin: () => void
  onDelete: () => void
}

const ItemOperation: FC<IItemOperationProps> = ({
  isItemHovering,
}) => {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const [isHovering, { setTrue: setIsHovering, setFalse: setNotHovering }] = useBoolean(false)
  useEffect(() => {
    if (!isItemHovering && !isHovering)
      setOpen(false)
  }, [isItemHovering, isHovering])
  return (
    <PortalToFollowElem
      open={open}
      onOpenChange={setOpen}
      placement='bottom-end'
      offset={4}
    >
      <PortalToFollowElemTrigger
        onClick={() => setOpen(v => !v)}
      >
        <div className={cn(s.btn, 'h-6 w-6 rounded-md border-none py-1', open && `${s.open} !bg-gray-100 !shadow-none`)}></div>
      </PortalToFollowElemTrigger>
      <PortalToFollowElemContent
        className="z-50"
      >
        <div
          ref={ref}
          className={'min-w-[120px] p-1 bg-white rounded-lg border border--gray-200 shadow-lg'}
          onMouseEnter={setIsHovering}
          onMouseLeave={setNotHovering}
          onClick={(e) => {
            e.stopPropagation()
          }}
        >
          <div className={cn(s.actionItem, 'hover:bg-gray-50 group')}>
            创建
          </div>

        </div>
      </PortalToFollowElemContent>
    </PortalToFollowElem>
  )
}
export default React.memo(ItemOperation)
