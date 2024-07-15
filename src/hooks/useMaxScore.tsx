import useFetchData from "@hooks/useFetchData"
import { useEffect, useState } from "react"

type MaxScoreType = {
  course: number
  score: number
  rate: number
  miss: number
  date: string
}

const initMaxScore = {
  course: 0,
  score: 0,
  rate: 0,
  miss: 0,
  date: "0000-00-00"
}

export default function useMaxScore() {
  const [maxScore, setMaxScore] = useState<MaxScoreType>(initMaxScore)
  const [data] = useFetchData()

  useEffect(() => {
    try {
      setMaxScore(
        Object.values(data).reduce((accumulator, currentValue) => {
          return currentValue.score > accumulator.score
            ? currentValue
            : accumulator
        })
      )
    } catch (error) {
      console.error(error)
    }
  }, [data])

  return [maxScore]
}
