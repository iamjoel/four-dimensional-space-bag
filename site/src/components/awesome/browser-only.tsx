import React, { FC } from 'react'
import DocusaurusBrowserOnly from '@docusaurus/BrowserOnly'

export interface IProps {
  children: React.ReactNode
}

const BrowserOnly: FC<IProps> = ({
  children
}) => {
  return (
    <DocusaurusBrowserOnly>
      {() => <>{children}</>}
    </DocusaurusBrowserOnly>
  )
}

export default BrowserOnly
