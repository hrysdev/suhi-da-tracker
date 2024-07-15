import useFetchScore from "@hooks/useFetchScore"
import { useEffect, useState } from "react"

import type { MaxScoreType } from "./types"

const initMaxMiss = {
  cost: 0,
  course: 0,
  date: "0000-00-00",
  miss: 0,
  rate: 0
}

export default function useMaxMiss() {
  const [maxMiss, setMaxMiss] = useState<MaxScoreType>(initMaxMiss)
  const [score] = useFetchScore()

  useEffect(() => {
    try {
      setMaxMiss(
        Object.values(score).reduce((accumulator, currentValue) => {
          return currentValue.miss < accumulator.miss
            ? currentValue
            : accumulator
        })
      )
    } catch (error) {
      console.error(error)
    }
  }, [score])

  return [maxMiss]
}
