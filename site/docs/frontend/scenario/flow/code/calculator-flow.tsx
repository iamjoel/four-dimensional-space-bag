import React from 'react'
import ReactFlow, { Controls, Background, Position } from 'reactflow'
import CalResNode from './cal-res'
import 'reactflow/dist/style.css'
/* TODO: 
1. 节点多时，如何很好的控制节点的位置。可以自动排吗？
2. 右下角有水印
*/
const initialNodes = [
  {
    id: '1',
    position: { x: 50, y: 50 },
    data: { label: '3' },
    type: 'input',
    sourcePosition: Position.Right,
  },
  {
    id: '2',
    position: { x: 50, y: 100 },
    data: { label: '4' },
    sourcePosition: Position.Right,
    type: 'input'
  },
  // 自定义节点
  {
    id: '3',
    type: 'calResNode',
    position: { x: 300, y: 75 },
    data: {
      combine: '3 + 4 = '
    }
  },
  {
    id: '4',
    type: 'output',
    position: { x: 450, y: 75 },
    targetPosition: Position.Left,
    data: { label: '7' }
  },
]

// 自定义节点
const nodeTypes = {
  calResNode: CalResNode,
};

const initialEdges = [
  {
    id: 'e1-3',
    source: '1',
    target: '3',
    targetHandle: 'l1',
    animated: true,
  },
  {
    id: 'e2-3',
    source: '2',
    target: '3',
    targetHandle: 'l2',
    animated: true,
  },
  {
    id: 'e3-4',
    source: '3',
    target: '4',
    animated: true,
  },
]

export default function App() {
  return (
    <div style={{ height: 300 }}>
      <ReactFlow
        nodes={initialNodes}
        nodeTypes={nodeTypes}
        edges={initialEdges}
        fitView
      >
        <Background variant="lines" />
        <Controls />
      </ReactFlow>
    </div>
  )
}
