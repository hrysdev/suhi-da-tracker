import useFetchData from "@hooks/useFetchData"
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
  const [data] = useFetchData()

  useEffect(() => {
    try {
      setMaxRate(
        Object.values(data).reduce((accumulator, currentValue) => {
          return currentValue.rate > accumulator.rate
            ? currentValue
            : accumulator
        })
      )
    } catch (error) {
      console.error(error)
    }
  }, [data])

  return [maxRate]
}
