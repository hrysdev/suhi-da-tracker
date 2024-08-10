import { useEffect, useState } from "react"

export type DataType = {
  [key: string]: {
    cost: number
    course: number
    dateTime: string
    miss: number
    rate: number
  }
}

const initData = {
  ["0"]: {
    cost: 0,
    course: 0,
    dateTime: "0000-00-00",
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
