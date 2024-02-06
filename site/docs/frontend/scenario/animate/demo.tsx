import React, { FC, useState, useRef, useEffect } from 'react'
import { useSpring, animated, to } from '@react-spring/web'
import { useHover } from 'ahooks'

type Props = {

}


const AnimateDemo: FC<Props> = ({
}) => {
  const ref = useRef(null)
  const isHovering = useHover(ref)

  const [{
    scale,
  }, api] = useSpring(() => ({
    scale: 1,
  }))

  useEffect(() => {
    api({
      scale: isHovering ? 1.2 : 1,
    })
  }, [isHovering])

  const [clickedEvenTimes, setClickedEvenTimes] = useState(false)
  const [{x}, api2] = useSpring(() => ({
      x: 0
    }))
  const handleClick = () => {
    api2({
      x: !clickedEvenTimes ? 300 : 0,
    })
    setClickedEvenTimes(!clickedEvenTimes)
  }
  return (
    <div>
      <animated.div
        ref={ref}         
        className='flex items-center justify-center w-52 h-52 shadow-md rounded-lg select-none'
        style={{
          scale
        }}
      >
        Hover me
      </animated.div>

      <div>
        <animated.div
          className='flex items-center justify-center w-52 h-52 shadow-md rounded-lg select-none'
          style={{
            x
          }}
          onClick={handleClick}
        >
          Click me
        </animated.div>
      </div>
    </div>
  )
}
export default React.memo(AnimateDemo)

