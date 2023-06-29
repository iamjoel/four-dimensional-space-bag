import React, { useEffect } from 'react'

export function ChangeVarNotReRender() {
  const value: any = {
    current: 5,
  }
  // (window as any).value = value
  console.log(Math.random())

  useEffect(() => {
    const runId = setInterval(() => {
      value.current = value.current + 1
      console.log(value.current)
      if (value.current > 30)
        clearInterval(runId)
    }, 3000)
    return () => {
      clearInterval(runId)
    }
  }, [])
  return (
    <div>
      value: {value.current}
    </div>
  )
}
