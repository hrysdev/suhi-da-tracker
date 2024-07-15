import { useEffect, useState } from "react"

import type { ScoreType } from "./types"

const initScore = {
  ["0"]: {
    cost: 0,
    course: 0,
    date: "0000-00-00",
    miss: 0,
    rate: 0
  }
}

export default function useFetchScore() {
  const [score, setScore] = useState<ScoreType>(initScore)

  useEffect(() => {
    try {
      chrome.storage.local.get(null, (rowScore) => {
        setScore(rowScore)
      })
    } catch (error) {
      console.error(error)
    }
  }, [])

  return [score]
}
