import React from 'react'

function FormDemo() {
  return (
    <form action="#">
      <label for="name">姓名:</label><input type="text" id="name" name="name" /><br />
      <label for="dob">出生日期:</label>
      <input type="date" id="dob" name="dob" /><br />
      <label for="gender">性别:</label>
      <input type="radio" name="gender" value="女" />女
      <input type="radio" name="gender" value="男" />男

      <br />
    </form >
  )
}

export default React.memo(FormDemo)
