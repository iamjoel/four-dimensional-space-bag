import type { FC } from 'react'
import React, { useState } from 'react'
import Slider from './index'

const SliderDemo: FC = ({
  initValue = 0,
  disabled,
}) => {
  const [current, setCurrent] = useState(initValue)

  return (
    <div>
      <Slider
        current={current}
        onChange={setCurrent}
        total={100}
        disabled={disabled}
      />
      <div className="mt-4">当前值: {Number.parseInt(current)}</div>
    </div>
  )
}
export default React.memo(SliderDemo)
