import type { FC } from 'react'
import React, { useCallback, useEffect } from 'react'
import { Button, InputNumber } from '@arco-design/web-react'
import { useBoolean, useGetState } from 'ahooks'

const CONTAINER_WIDTH = 200
const CONTAINER_HEIGHT = 200
const BALL_R = 10 // 圆的半径
const REFRESH_DURATION = 25 // 毫秒

enum Speed {
  slow = 10,
  middle = 20,
  fast = 40,
}

enum Dir {
  left = 'left',
  right = 'right',
  top = 'top',
  bottom = 'bottom',
}

const BallGame: FC = ({
}) => {
  const [isRun, { toggle: toggleRun }] = useBoolean(false)
  const [x, setX, getX] = useGetState(CONTAINER_WIDTH / 2) // 中心点的X坐标
  const [y, setY, getY] = useGetState(CONTAINER_HEIGHT / 2) //  中心点的Y坐标
  const [speed, setSpeed, getSpeed] = useGetState<Speed>(Speed.fast)
  const [dir, setDir, getDir] = useGetState<Dir>(Dir.right)

  let runId
  const move = useCallback(() => {
    let newX = getX()
    let newY = getY()
    const distance = getSpeed() * REFRESH_DURATION / 1000
    let overflowDistance // 溢出部分
    switch (getDir()) {
      case Dir.top:
        newY -= distance
        overflowDistance = -newY + BALL_R
        if (overflowDistance > 0) {
          newY = overflowDistance + 2 * BALL_R
          setDir(Dir.bottom)
        }
        break
      case Dir.bottom:
        newY += distance
        overflowDistance = newY - CONTAINER_HEIGHT + BALL_R
        if (overflowDistance > 0) {
          newY = CONTAINER_HEIGHT - overflowDistance - BALL_R
          setDir(Dir.top)
        }
        break
      case Dir.left:
        newX -= distance
        overflowDistance = -newX + BALL_R
        if (overflowDistance > 0) {
          newX = overflowDistance + 2 * BALL_R
          setDir(Dir.right)
        }
        break
      case Dir.right:
        newX += distance
        overflowDistance = newX - CONTAINER_WIDTH + BALL_R
        if (overflowDistance > 0) {
          newX = CONTAINER_WIDTH - overflowDistance - BALL_R
          setDir(Dir.left)
        }
        break
    }
    setX(newX)
    setY(newY)
  }, [])

  useEffect(() => {
    if (isRun) {
      move()
      runId = setInterval(move, REFRESH_DURATION)
    }
    else {
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
          top: y - BALL_R,
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
