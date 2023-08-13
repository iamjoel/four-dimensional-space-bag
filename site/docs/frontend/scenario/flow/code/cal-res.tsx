import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

export default memo(({ data, isConnectable }) => {
  return (
    <div className='relative'>
      <Handle
        id='l1'
        type="target"
        position={Position.Left}
        style={{ top: 10, background: '#555' }}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
      />
      <Handle
        id='l2'
        type="target"
        position={Position.Left}
        style={{ top: 'unset', bottom: 10, background: '#555' }}
        isConnectable={isConnectable}
      />
      <div className='flex p-2 border border-solid border-gray-800 rounded-md'>
        {data.combine}
      </div>

      <Handle
        type="source"
        position={Position.Right}
        // style={{ bottom: 10, top: 'auto', background: '#555' }}
        isConnectable={isConnectable}
      />
    </div>
  );
});
