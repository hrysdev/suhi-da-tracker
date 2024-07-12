import { useEffect, useState } from "react"

import { Storage } from "@plasmohq/storage"

export default function useScore() {
  const [score, setScore] = useState()
  const storage = new Storage({ area: "local" })

  useEffect(() => {
    const data = async () => {
      const data = await storage.get(null)
      console.log(data)
    }
    data()
  }, [])

  // return score as const
}
