import React from 'react'

function TableDemo() {
  return (
    <table>
      <tr>
        <th>时间</th>
        <th>星期一</th>
        <th>星期二</th>
        <th>星期三</th>
        <th>星期四</th>
        <th>星期五</th>
      </tr>
      <tr>
        <td>上午</td>
        <td>体育</td>
        <td>语文</td>
        <td>数学</td>
        <td>英语</td>
        <td>美术</td>
      </tr>
      <tr>
        <td>下午</td>
        <td>化学</td>
        <td>物理</td>
        <td>历史</td>
        <td>生物</td>
        <td>音乐</td>
      </tr>
    </table>
  )
}

export default React.memo(TableDemo)
