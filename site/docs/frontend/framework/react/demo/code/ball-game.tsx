import React, { FC } from 'react'
import { Button, InputNumber } from '@arco-design/web-react'

const BallGame: FC = ({
}) => {
  return (
    <div className='mb-4'>
      <div className='relative w-[200px] h-[200px] shadow'>
        <div className={`
          absolute
          w-5 h-5
          rounded-full bg-green-500
        `}
          style={{
            left: 50,
            top: 50
          }}
        />
      </div>
      <div className='mt-5'>
        <div className='flex items-center'>
          <div className='flex items-center space-x-3'>
            <div className='flex items-center space-x-2'>
              <div>x: </div>
              <div className='w-32'>
                <InputNumber
                  mode='button'
                  className=''
                />
              </div>
            </div>
            <div className='flex items-center space-x-2'>
              <div>y: </div>
              <div className='w-32'>
                <InputNumber
                  mode='button'
                  className=''
                />
              </div>
            </div>
          </div>
        </div>

        <div className='flex items-center mt-3'>
          <div className='flex items-center space-x-2'>
            <div>方向: </div>
            <Button.Group>
              <Button type="primary" shape="round">上</Button>
              <Button type="outline">下</Button>
              <Button type="outline" shape="round">左</Button>
              <Button type="outline" shape="round">右</Button>
            </Button.Group>
          </div>
        </div>

        <div className='flex items-center mt-3'>
          <div className='flex items-center space-x-3'>
            <div className='flex items-center space-x-2'>
              <div>速度: </div>
              <Button.Group>
                <Button type="primary" shape="round">慢</Button>
                <Button type="outline">中</Button>
                <Button type="outline" shape="round">快</Button>
              </Button.Group>
              <div className='text-xs'>5px/秒</div>
            </div>
          </div>
        </div>

        <div className='flex items-center mt-3'>
          <Button type='primary'>开始</Button>
        </div>
      </div>
    </div>
  )
}

export default React.memo(BallGame)
