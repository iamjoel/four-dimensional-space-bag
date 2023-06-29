import { useCallback } from 'react'

function useCount({
  value,
  setValue,
  maxValue,
}) {
  const minus = useCallback(() => {
    setValue(value - 1)
  }, [value])

  const plus = useCallback(() => {
    setValue(value + 1)
  }, [value])

  const isValid = (value: string) => {
    if (/^[0-9]+$/.test(value))
      return true

    return false
  }

  const isMax = value >= maxValue

  return {
    minus,
    plus,
    isValid,
    isMax,
  }
}

export default useCount
