import React, { FC, ReactNode } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
// import '@splidejs/react-splide/css'
import '@splidejs/react-splide/css/sea-green' // 皮肤

// https://splidejs.com/integration/react-splide/ 
export interface ISlideProps {
  children: ReactNode
}
const Slide: FC<ISlideProps> = ({
  children
}) => {
  return (
    <div>
      <Splide options={{
        type: 'loop',
        rewind: true,
        width : 800,
        fixedHeight: 200
      }}>
        {children}
      </Splide>
    </div>
  )
}

export default React.memo(Slide)

export { SplideSlide }
