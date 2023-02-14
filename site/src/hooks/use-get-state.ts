import { useState, useRef } from 'react'

const useGetState = <T>(initValue: T) => {
  const [value, doSetValue] = useState<T>(initValue)
  const valueRef = useRef<T>(initValue)

  const getValue = () => valueRef.current

  const setValue = (v: T) => {
    doSetValue(v)
    valueRef.current = v
  }

  return [value, setValue, getValue]
}

export default useGetState
