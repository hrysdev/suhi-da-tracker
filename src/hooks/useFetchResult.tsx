import { useEffect, useState } from "react"

import type { ResultType } from "./types"

const initResult = {
  ["0"]: {
    cost: 0,
    course: 0,
    date: "0000-00-00",
    miss: 0,
    rate: 0
  }
}

export default function useFetchResult() {
  const [result, setResult] = useState<ResultType>(initResult)

  useEffect(() => {
    try {
      chrome.storage.local.get(null, (rowResult) => {
        setResult(rowResult)
      })
    } catch (error) {
      console.error(error)
    }
  }, [])

  return [result]
}
