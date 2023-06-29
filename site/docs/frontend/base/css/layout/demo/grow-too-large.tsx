import React from 'react'

function GrowTooLargeBreakUI({
}) {
  return (
    <div className="flex h-40 text-white ">
      <div className="shrink-0 h-full bg-indigo-500 px-1">Left</div>
      <div className="h-full grow w-0 bg-indigo-400">
        <div className="white  overflow-hidden text-ellipsis whitespace-nowrap">adasdasdasdadasdasdasdasdasadasdasdasdadasdasadasdasdasdadasdasdasdasdasadasdasdasdadasdas large part</div>
      </div>
    </div>
  )
}

export default React.memo(GrowTooLargeBreakUI)
