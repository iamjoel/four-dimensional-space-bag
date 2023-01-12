import React, { FC, useState } from 'react'
import CodeBlock from '@theme/CodeBlock'

export interface ICodeProps {
  language?: string,
  title?: string,
  content: string
}
const Code: FC<ICodeProps> = ({
  language = 'jsx',
  title,
  content
}) => {
  const [isShow, setIsShow] = useState(false)

  return (
    <div className="code mt-5">
      <div className="mb-3 flex justify-end space-x-3">
        <div 
          className="box-border flex justify-center items-center rounded-full border border-solid w-[28px] h-[28px] p-[5px] cursor-pointer"
          style={{
            borderColor: isShow ? 'rgb(29, 33, 41)' : 'rgb(229, 230, 225)',
            backgroundColor: isShow ? 'rgb(29, 33, 41)' : 'transparent',
            color: isShow ? '#fff' : 'inherit'
          }}
          onClick={() => setIsShow(!isShow)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
          </svg>
        </div>
      </div>
      {
        isShow && (
          <CodeBlock
            language={language}
            title={title}
            showLineNumbers
          >
            {content}
          </CodeBlock>
        )
      }
    </div>
  )
}
export default React.memo(Code)
