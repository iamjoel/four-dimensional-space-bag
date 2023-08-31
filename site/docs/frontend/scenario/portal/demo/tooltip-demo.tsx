import React, { useEffect, useState } from 'react'
import { Button, Slider } from '@arco-design/web-react'
import { PortalToFollowElem, PortalToFollowElemContent, PortalToFollowElemTrigger } from './portal-to-follow-elem'

const ButtonGroup = Button.Group
function Demo() {
  const [open, setOpen] = useState(false)
  const [alignMain, setAlignMain] = useState('top')
  const [alignSub, setAlignSub] = useState('middle')
  const align = (() => {
    if (alignSub === 'middle')
      return alignMain

    return `${alignMain}-${alignSub}`
  })()

  const [offset, setOffset] = useState(0)

  useEffect(() => {
    setOpen(true)
  }, [align, offset])
  return (
    <div>
      <div className="overflow-y-auto h-[200px]">
        <div className="flex justify-center h-[400px]">
          <PortalToFollowElem
            open={open}
            onOpenChange={setOpen}
            placement={align}
            offset={offset}
          >
            <PortalToFollowElemTrigger
              className="h-40"
              onClick={() => setOpen(v => !v)}
            >
              <Button
                type="outline"
                className="w-40 !h-40"
              >Click me</Button>
            </PortalToFollowElemTrigger>
            <PortalToFollowElemContent className="z-50">
              <Button type="primary">
                My tooltip
              </Button>
            </PortalToFollowElemContent>
          </PortalToFollowElem>
        </div>
      </div>

      <div className="mt-10 space-y-2">

        <div>
          方向：
          <ButtonGroup>
            <Button
              type={alignMain === 'top' ? 'primary' : 'outline'} shape='round'
              onClick={() => setAlignMain('top')}
            >上</Button>
            <Button
              type={alignMain === 'bottom' ? 'primary' : 'outline'} shape='round'
              onClick={() => setAlignMain('bottom')}
            >下</Button>
            <Button
              type={alignMain === 'left' ? 'primary' : 'outline'} shape='round'
              onClick={() => setAlignMain('left')}
            >左</Button>
            <Button
              type={alignMain === 'right' ? 'primary' : 'outline'} shape='round'
              onClick={() => setAlignMain('right')}
            >右</Button>
          </ButtonGroup>
        </div>
        <div>
          侧轴方向：
          <ButtonGroup>
            <Button
              type={alignSub === 'start' ? 'primary' : 'outline'} shape='round'
              onClick={() => setAlignSub('start')}
            >开始</Button>
            <Button
              type={alignSub === 'middle' ? 'primary' : 'outline'} shape='round'
              onClick={() => setAlignSub('middle')}
            >居中</Button>
            <Button
              type={alignSub === 'end' ? 'primary' : 'outline'} shape='round'
              onClick={() => setAlignSub('end')}
            >结束</Button>
          </ButtonGroup>
        </div>
        <div className="flex space-x-2 items-center">
          <div className="shrink-0">离 Trigger 的距离</div>
          <Slider
            value={offset}
            onChange={setOffset}
          />
        </div>
      </div>
    </div>
  )
}

export default Demo
