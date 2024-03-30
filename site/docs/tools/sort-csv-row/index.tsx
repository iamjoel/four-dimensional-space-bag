'use client'
import type { FC } from 'react'
import React, { useState } from 'react'
import { CSVDownloader, CSVReader } from './csv'

const SortCSVRow: FC = () => {
  const [sortedData, setSortedData] = useState<object[]>([])
  return (
    <div>
      <CSVReader onFinish={setSortedData} >
        <CSVDownloader payload={sortedData} />
      </CSVReader>
    </div>
  )
}
export default React.memo(SortCSVRow)
