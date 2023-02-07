import React, { FC, useState, useCallback, useEffect } from 'react'
import { Button, InputNumber } from '@arco-design/web-react'
import { useBoolean, useGetState } from 'ahooks'

const CONTAINER_WIDTH = 200
const CONTAINER_HEIGHT = 200
const BALL_R = 10 // 圆的半径

enum Speed {
  slow = 5,
  middle = 10,
  fast = 20
}

enum Dir {
  left = 'left',
  right = 'right',
  top = 'top',
  bottom = 'bottom',
}

const BallGame: FC = ({
}) => {
  const [isRun, {toggle: toggleRun}] = useBoolean(false)
  const [x, setX, getX] = useGetState(CONTAINER_WIDTH / 2) // 中心点的X坐标
  const [y, setY, getY] = useGetState(CONTAINER_HEIGHT / 2 - BALL_R)
  const [speed, setSpeed, getSpeed] = useGetState<Speed>(Speed.fast)
  const [dir, setDir, getDir] = useGetState<Dir>(Dir.top)
  let runId
  const move = useCallback(() => {
    let newX = getX()
    let newY = getY()
    const distance = getSpeed()
    switch(getDir()) {
      case Dir.top:
        newY -= distance
        if(newY < 0) {
          newY = -newY
          setDir(Dir.bottom)
        }
        break
      case Dir.bottom:
        newY += distance
        if(newY > CONTAINER_HEIGHT) {
          newY = CONTAINER_HEIGHT - (newY - CONTAINER_HEIGHT)
          setDir(Dir.top)
        }
        break
      case Dir.left:
        newX -= distance
        // TODO:
        break
      case Dir.right:
        // TODO:
        newX += distance
        break
    }
    setX(newX)
    setY(newY)
  }, [])

  useEffect(() => {
    if(isRun) {
      move()
      runId = setInterval(move, 1000)
    } else {
      clearInterval(runId)
    }
    return () => {
      clearInterval(runId)
    }
  }, [isRun])

  return (
    <div className='mb-4'>
      <div className='relative w-[200px] h-[200px] shadow'>
        <div className={`
          absolute
          w-5 h-5
          rounded-full bg-green-500
        `}
          style={{
            left: x - BALL_R,
            top: y - BALL_R
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
                  value={x}
                  onChange={setX}
                  step={5}
                  disabled={isRun}
                />
              </div>
            </div>
            <div className='flex items-center space-x-2'>
              <div>y: </div>
              <div className='w-32'>
                <InputNumber
                  mode='button'
                  className=''
                  value={y}
                  onChange={setY}
                  step={5}
                  disabled={isRun}
                />
              </div>
            </div>
          </div>
        </div>

        <div className='flex items-center mt-3'>
          <div className='flex items-center space-x-2'>
            <div>方向: </div>
            <Button.Group>
              <Button 
                type={dir === Dir.top ? 'primary' : 'outline'}
                onClick={() => !isRun && setDir(Dir.top)}
                disabled={isRun}
                shape="round"
              >上</Button>
              <Button 
                type={dir === Dir.bottom ? 'primary' : 'outline'}
                onClick={() => !isRun && setDir(Dir.bottom)}
                disabled={isRun}
              >下</Button>
              <Button 
                type={dir === Dir.left ? 'primary' : 'outline'}
                onClick={() => !isRun && setDir(Dir.left)}
                disabled={isRun}
              >左</Button>
              <Button 
                type={dir === Dir.right ? 'primary' : 'outline'}
                onClick={() => !isRun && setDir(Dir.right)}
                disabled={isRun}
                shape="round"
              >右</Button>
            </Button.Group>
          </div>
        </div>

        <div className='flex items-center mt-3'>
          <div className='flex items-center space-x-3'>
            <div className='flex items-center space-x-2'>
              <div>速度: </div>
              <Button.Group>
                <Button 
                  type={speed === Speed.slow ? 'primary' : 'outline'}
                  onClick={() => !isRun && setSpeed(Speed.slow)}
                  disabled={isRun}
                  shape="round"
                >慢</Button>
                <Button 
                  type={speed === Speed.middle ? 'primary' : 'outline'}
                  onClick={() => !isRun && setSpeed(Speed.middle)}
                  disabled={isRun}
                >中</Button>
                <Button 
                  type={speed === Speed.fast ? 'primary' : 'outline'}
                  onClick={() => !isRun && setSpeed(Speed.fast)}
                  disabled={isRun}
                  shape="round"
                >快</Button>
              </Button.Group>
              <div className='text-xs'>{speed}px/秒</div>
            </div>
          </div>
        </div>

        <div className='flex items-center mt-3'>
          <Button type='primary' onClick={toggleRun}>
            {isRun ? '暂停' : '开始'}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default React.memo(BallGame)
