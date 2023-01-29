import React, { FC } from 'react'
import _ from 'lodash'
import cn from 'clsx'
import Demo from '../demo'

interface IItem {
  title: string
  expectValue: any
  actuallyValue: any
  isThrow?: boolean
}

export interface ITestCaseProps {
  title: string
  items: IItem[]
}

const TestCase: FC<ITestCaseProps> = ({
  title,
  items
}) => {
  const hasWrong = !!items.find(({expectValue, actuallyValue}) => !_.isEqual(expectValue, actuallyValue))
  const renderItem = ({
    title,
    expectValue,
    actuallyValue
  }: IItem) => {
    const isRight = _.isEqual(expectValue, actuallyValue)
    return (
      <div key={title} className={cn('mb-1 text-sm', isRight ? 'text-green-500': 'text-red-500')}>
        <div className='flex items-center'>
          <span className='mr-1 h-6'>{isRight ? rightIcon : wrongIcon}</span>
          {title}{!title.endsWith('。') && '。'}
        </div>
        {!isRight && (<div className='ml-3 pl-4 text-xs'>
          期望值: {renderValue(expectValue)}。实际值: {renderValue(actuallyValue)}。
        </div>)}
      </div>
    )
  }

  const renderValue = (value: any) => {
    if(typeof value ==='string') {
      return `'${value}'`
    }
    if(typeof value === 'object') {
      return JSON.stringify(value)
    }
    return value + ''
  }
  return (
    <Demo padding="p-6">
      <div>
        <div className={cn('mb-2', !hasWrong ? 'text-green-500': 'text-red-500')}>{title}</div>
        <div className='pl-4x'>
          {
            items.map(item => renderItem(item))
          }
        </div>
      </div>
    </Demo>
  )
}

export default React.memo(TestCase)

const rightIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const wrongIcon = (
  <div className="flex justify-center items-center w-6 h-6">
    <div className="flex justify-center items-center w-5 h-5 border-solid rounded-full border border-red-500">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </div>
  </div>
)
