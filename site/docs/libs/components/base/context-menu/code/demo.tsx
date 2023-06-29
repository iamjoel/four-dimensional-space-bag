import type { FC } from 'react'
import React, { useState } from 'react'
import { Button } from '@arco-design/web-react'
import ContextMenu from './index'

const Demo: FC = ({
}) => {
  const [selected, setSelected] = useState()
  return (
    <div>
      <ContextMenu
        menus={[
          {
            key: 'create',
            node: '创建',
          },
          {
            key: 'copy',
            node: (
              <div className="flex justify-between">
                <span>复制</span>
                <span style={{ color: '#77778C' }}>⌘C</span>
              </div>
            ),
          },
        ]}
        onAction={setSelected}
      >
        <Button type="primary">
          右击点我
        </Button>
      </ContextMenu>
      {selected && `刚刚点了：${selected}`}
    </div>
  )
}

export default React.memo(Demo)
