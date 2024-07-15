import useFetchScore from "@hooks/useFetchScore"
import { useEffect, useState } from "react"

import type { MaxScoreType } from "./types"

const initMaxCost = {
  cost: 0,
  course: 0,
  date: "0000-00-00",
  miss: 0,
  rate: 0
}

export default function useMaxCost() {
  const [maxCost, setMaxCost] = useState<MaxScoreType>(initMaxCost)
  const [score] = useFetchScore()

  useEffect(() => {
    try {
      setMaxCost(
        Object.values(score).reduce((accumulator, currentValue) => {
          return currentValue.cost > accumulator.cost
            ? currentValue
            : accumulator
        })
      )
    } catch (error) {
      console.error(error)
    }
  }, [score])

  return [maxCost]
}
