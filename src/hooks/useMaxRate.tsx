import useFetch from "@hooks/useFetch"
import { useEffect, useState } from "react"

type MaxRateType = {
  course: number
  score: number
  rate: number
  miss: number
  date: string
}

const initMaxRate = {
  course: 0,
  score: 0,
  rate: 0,
  miss: 0,
  date: "0000-00-00"
}

export default function useMaxRate() {
  const [maxRate, setMaxRate] = useState<MaxRateType>(initMaxRate)
  const [data] = useFetch()

  useEffect(() => {
    try {
      setMaxRate(
        Object.values(data).reduce((maxRow, currentRow) => {
          return currentRow.rate > maxRow.rate ? currentRow : maxRow
        })
      )
    } catch (error) {
      console.error(error)
    }
  }, [data])

  return [maxRate]
}
