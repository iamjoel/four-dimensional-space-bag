const scrollToElem = (wrapElem: HTMLElement, targetElem: HTMLElement, isVer?: boolean) => {
  if(wrapElem && targetElem) {
    if(isVer) { // 垂直方向
      const { top: wrapTop } = wrapElem.getBoundingClientRect()
      const wrapScrollTop = wrapElem.scrollTop
      const { top: childTop } = targetElem.getBoundingClientRect()
      const scrollTop = childTop - wrapTop + wrapScrollTop // 浏览器网上滚动了，子元素的top就小了滚动值
      wrapElem.scrollTo({
        top: scrollTop,
        behavior: 'smooth',
      })
    } else { // 水平方向
      const { left: wrapLeft} = wrapElem.getBoundingClientRect()
      const wrapScrollLeft = wrapElem.scrollLeft
      const { left: childLeft } = targetElem.getBoundingClientRect()
      const scrollLeft = childLeft - wrapLeft + wrapScrollLeft // 浏览器网上滚动了，子元素的top就小了滚动值
      wrapElem.scrollTo({
        left: scrollLeft,
        behavior: 'smooth',
      })
    }
  }
}

export default scrollToElem
