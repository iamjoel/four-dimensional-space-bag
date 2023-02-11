import React, { CSSProperties, FC, useRef } from 'react'
import {useBoolean, useClickAway} from 'ahooks'
import s from './style.module.css'
export interface ISelectProps {
  value: any
  onChange: (value: any) => void
  options: {
    value: any
    label: string
  }[]

  style?: CSSProperties
  showInTop?: boolean
}
const Select: FC<ISelectProps> = ({
  value,
  onChange,
  options,
  style = undefined,
  showInTop
}) => {
  const wrapRef = useRef(null)
  const [isShow, {toggle, setFalse: hide}] = useBoolean(false)
  useClickAway(hide, wrapRef)
  const currentLabel = options.find(item => item.value === value)?.label || '请选择'
  return (
    <div className={s.select} style={style} ref={wrapRef}>
      <div className={s.input} onClick={toggle}>{currentLabel}</div>
      {isShow && (
        <div className={s.options} style={{
          [showInTop ? 'bottom' : 'top']: 32
        }}>
          {options.map(({value, label}) => (
            <div 
              key={value}
              className={`${s.option} ${label === currentLabel && s.optionSelected}`}
              onClick={() => {
                onChange(value)
                hide()
              }}
            >
              {label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default React.memo(Select)
