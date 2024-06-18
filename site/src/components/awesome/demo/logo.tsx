import type { FC } from 'react'
import React, { useEffect } from 'react'

type Props = {
  width?: number
  isBlack?: boolean
}

const kawaiiLogo = <img style={{ width: '100%' }} src='https://react.dev/_next/image?url=%2Fimages%2Fuwu.png&w=384&q=75' />
const normalBlackLogo = <svg style={{ width: '100%' }} width="100%" height="100%" viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg" class="uwu-hidden mt-4 mb-3 text-brand dark:text-brand-dark w-24 lg:w-28 self-center text-sm me-0 flex origin-center transition-all ease-in-out"><circle cx="0" cy="0" r="2" fill="currentColor"></circle><g stroke="currentColor" stroke-width="1" fill="none"><ellipse rx="10" ry="4.5"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse></g></svg>
const normalWhiteLogo = <svg style={{ width: '100%' }} width="100%" height="100%" viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg" class="uwu-hidden mt-4 mb-3 text-brand dark:text-brand-dark w-24 lg:w-28 self-center text-sm me-0 flex origin-center transition-all ease-in-out"><circle cx="0" cy="0" r="2" fill="currentColor"></circle><g stroke="currentColor" stroke-width="1" fill="none"><ellipse rx="10" ry="4.5"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse></g></svg>

const saveISKaviiKey = 'isKawaii'
const Logo: FC<Props> = ({
  width = 50,
  isBlack = false,
}) => {
  const query = new URLSearchParams(window.location.search)
  const kawaiiQuery = query.get('uwu') || query.get('kawaii')
  const isKawaii = kawaiiQuery === 'true' || (kawaiiQuery !== 'false' && localStorage.getItem(saveISKaviiKey) === 'true')
  useEffect(() => {
    localStorage.setItem(saveISKaviiKey, isKawaii ? 'true' : 'false')
  }, [])
  return (
    <div style={{
      width,
    }}> {isKawaii ? kawaiiLogo : (isBlack ? normalBlackLogo : normalWhiteLogo)}
    </div>
  )
}

export default React.memo(Logo)
