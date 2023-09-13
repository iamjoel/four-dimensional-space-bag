import React from 'react'
import type { Config } from '@measured/puck'
import { Puck } from '@measured/puck'

type Props = {
  HeadingBlock: { title: string }
}

export const config: Config<Props> = {
  components: {
    HeadingBlock: {
      fields: {
        title: { type: 'text' },
      },
      defaultProps: {
        title: 'Heading',
      },
      render: ({ title }) => (
        <div style={{ padding: 64 }}>
          <h1>{title}</h1>
        </div>
      ),
    },
  },
}

// Describe the initial data
const initialData = {
  content: [
    {
      type: 'HeadingBlock',
      props: {
        title: 'abc',
      },
    },
  ],
  root: { title: '' },
}

// Save the data to your database
function save(data) {
  console.log(data)
}

function Demo() {
  return (
    <Puck config={config} data={initialData} onPublish={save} />
  )
}
export default React.memo(Demo)
