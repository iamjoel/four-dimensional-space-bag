import type { FC } from 'react'
import React, { useEffect } from 'react'

function foo() {
}
function baz() {
  foo()
}
function what() {
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
