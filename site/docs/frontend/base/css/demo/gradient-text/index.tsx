'use client'
import type { FC } from 'react'
import React from 'react'

import s from './style.module.css'

// 生成器 https://unused-css.com/tools/border-gradient-generator
const GradientText: FC = ({
}) => {
  return (
    <div className={`${s.text} text-[40px] font-bold`}
    >CSS Text Gradient: Can you fell it</div>
  )
}
export default React.memo(GradientText)
