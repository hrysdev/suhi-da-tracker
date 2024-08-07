import { useEffect, useState } from "react"

import type { DataType } from "./types"

const initData = {
  ["0"]: {
    cost: 0,
    course: 0,
    date: "0000-00-00",
    miss: 0,
    rate: 0
  }
}

export default function useFetchData() {
  const [data, setData] = useState<DataType>(initData)

  useEffect(() => {
    try {
      chrome.storage.local.get(null, (rowData) => {
        setData(rowData)
      })
    } catch (error) {
      console.error(error)
    }
  }, [])

  return [data]
}
