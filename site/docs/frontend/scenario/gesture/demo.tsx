import React, { FC, useState } from 'react'
import { useDrag } from '@use-gesture/react'
import { Select } from '@arco-design/web-react'

type Props = {

}

enum Dir {
  all = 'all',
  x = 'x',
  y = 'y'
}

const Gesture: FC<Props> = ({
}) => {
  const [dir, setDir] = useState<Dir>(Dir.all)
  const [translateX, setTranslateX] = useState(0)
  const [translateY, setTranslateY] = useState(0)
  const [dx, setDx] = useState(0)
  const [dy, setDy] = useState(0)
  const bind = useDrag(({ args: [info], down, movement: [mx, my] }) => {
    // console.log(info, down, mx, my)
    if(dir !== Dir.x) {
      if(down) {
        setDy(my)
      } else {
        setDy(0)
        setTranslateY(translateY + my)
      }
    }

    if(dir !== Dir.y) {
      if(down) {
        setDx(mx)
      } else {
        setDx(0)
        setTranslateX(translateX + mx)
      }
    }


  })

  return (
    <div>
      <Select value={dir} onChange={setDir}>
        <Select.Option value="all">All</Select.Option>
        <Select.Option value="x">Only X</Select.Option>
        <Select.Option value="y">Only Y</Select.Option>
      </Select>
      <div 
        className='inline-block px-2 py-2 border border-orange-700 bg-[#f60] text-white rounded-md cursor-pointer select-none'
        style={{
          transform: `translate3d(${translateX + dx}px, ${translateY + dy}px, 0)`
        }}
        {...bind(2)} 
      >
        Drag me
      </div>
    </div>
    
  )
}
export default React.memo(Gesture)

