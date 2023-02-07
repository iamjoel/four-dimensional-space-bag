import React, { FC } from 'react'
import {applyVueInReact} from 'veaury'
import ComponentVue from './index.vue'

const Component = applyVueInReact(ComponentVue)

const Wrap: FC = () => {
  return (
    <div className='my-2'>
      <Component />
    </div>

  )
}

export default React.memo(Wrap)
