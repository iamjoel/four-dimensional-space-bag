import { useAsyncEffect } from 'ahooks'
import React, { FC, useEffect } from 'react'
const foo = () => {
}
const baz = () => {
  foo()
}
const what = () => {
  baz()
}

const CallTrace: FC = ({
}) => {
  useEffect(() => {
    what()
  }, [])
  return (
    <div>
    </div>
  )
}
export default React.memo(CallTrace)
