'use client'
import type { FC } from 'react'
import React from 'react'

import s from './style.module.css'

// 生成器 https://unused-css.com/tools/border-gradient-generator
const GradientBorder: FC = ({
}) => {
  return (
    <div className={`border ${s.border}`}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet magna volutpat, rhoncus lectus quis, dictum quam. Mauris tempor odio enim, lacinia viverra odio scelerisque a. Vivamus posuere enim quam, vitae faucibus purus vehicula ac. Nulla finibus laoreet magna, eget venenatis lorem convallis eu. Donec consequat dapibus mauris, quis lacinia dolor hendrerit id. Maecenas euismod interdum lobortis. Praesent placerat libero sed leo tempor, sit amet elementum lorem tempor. Proin feugiat leo vitae eros lacinia, id aliquam urna pretium.
    </div>
  )
}
export default React.memo(GradientBorder)
