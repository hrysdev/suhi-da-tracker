import { useEffect, useState } from "react"

type DataType = {
  [key: string]: {
    course: number
    score: number
    rate: number
    miss: number
    date: string
  }
}

const initData = {
  ["0"]: {
    course: 0,
    score: 0,
    rate: 0,
    miss: 0,
    date: "0000-00-00"
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
