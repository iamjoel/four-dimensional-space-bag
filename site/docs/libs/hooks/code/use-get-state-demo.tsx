import React, { FC, useEffect, useCallback } from 'react'
import { Button } from '@arco-design/web-react'
import useGetState from '@site/src/hooks/use-get-state'

const UseGetStateDemo: FC = ({
}) => {
  const [count, setCount, getCount] = useGetState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      // getCount() 是最新值。 count 是旧值。
      console.log(`[useEffect] count ${getCount()};${count}`);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // 故意在依赖列表中不写 count
  const logCount = useCallback(() => {
    console.log(`[useCallback] count ${getCount()};${count}`);
  }, [])

  return (
    <div>
      <Button 
        type="primary"
        onClick={() => {
          setCount(count + 1)
          logCount()
        }}>
        count: {count}
      </Button>
      <div>Open console to view logs: The counter prints the value every 3 seconds.</div>
    </div>
  )
}
export default React.memo(UseGetStateDemo)
