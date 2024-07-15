import { validateHeaderValue } from "http"
import useFetchData from "@hooks/useFetchData"
import { useEffect, useState } from "react"

type MaxMissType = {
  course: number
  score: number
  rate: number
  miss: number
  date: string
}

const initMaxMiss = {
  course: 0,
  score: 0,
  rate: 0,
  miss: 0,
  date: "0000-00-00"
}

export default function useMaxMiss() {
  const [maxMiss, setMaxMiss] = useState<MaxMissType>(initMaxMiss)
  const [data] = useFetchData()

  useEffect(() => {
    try {
      setMaxMiss(
        Object.values(data).reduce((accumulator, currentValue) => {
          return currentValue.miss < accumulator.miss
            ? currentValue
            : accumulator
        })
      )
    } catch (error) {
      console.error(error)
    }
  }, [data])

  return [maxMiss]
}
