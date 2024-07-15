export type ScoreType = {
  [key: string]: {
    cost: number
    course: number
    date: string
    miss: number
    rate: number
  }
}

export type MaxScoreType = {
  cost: number
  course: number
  date: string
  miss: number
  rate: number
}
