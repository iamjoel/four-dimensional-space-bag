import React, { FC } from 'react'
import { Button } from "@arco-design/web-react"
import Toast from './'

const Demo: FC = ({
}) => {
  return (
    <div>
      <Button onClick={() => Toast.show()}>点我</Button>
    </div>
  )
}
export default React.memo(Demo)
