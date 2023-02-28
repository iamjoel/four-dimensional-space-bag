import React, { useEffect } from "react"
import ReactDOM from 'react-dom'
// import * as ReactDOM from 'react-dom/client'
// ReactDOM.createRoot

import s from './style.module.css'

let root
const removeContainer = () => {
  const container = document.getElementById('toast-wrap')
  if(container) {
    document.body.removeChild(container)
  }
  if(root) {
    root = null
  }
}

const Toast = {
  show: ({
    type,
    content
  } = {
    type: 'success',
    content: '操作成功'
  }) => {
    // let container = document.getElementById('toast-wrap')
    // if(!container) {
    //   const div = document.createElement('div')
    //   div.setAttribute('id', 'toast-wrap')
    //   container = div
    //   // document.body.append(container)
    // }
    // if(!root) {
    //   root = ReactDOM.createRoot(container) // react 18 的api
    // }
    // root.render(
    //   <ToastContent type={type} content={content}/>
    // )

    ReactDOM.createPortal((
      <div id="toast-wrap"><ToastContent type={type} content={content}/></div>
    ),
      document.body)
  },
  hide: ()=> {
    removeContainer()
  }
}

const ToastContent = ({
  type = 'success',
  content
}) => {
  useEffect(() => {
    setTimeout(() => {
      removeContainer()
    }, 2000)
    return () => {
      removeContainer()
    }
  }, [])
  return (
    <div className={s.toast}>
      <div className={s.main}>
        <div className={[s.icon, s[type]].join(' ')}></div>
        {content && <div className={s.text}>{content}</div>}
      </div>
    </div>
  )
}

export default Toast