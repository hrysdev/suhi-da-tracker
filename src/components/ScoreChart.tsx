import useFetchData from "@hooks/useFetchData"
import Paper from "@mui/material/Paper"
import {
  ChartsTooltip,
  ChartsXAxis,
  ChartsYAxis,
  LinePlot,
  MarkPlot,
  ResponsiveChartContainer
} from "@mui/x-charts"

export default function ScoreChart() {
  const [data] = useFetchData()

  // 日付をKeyとして、最大スコアをValueとするオブジェクトを作成
  const maxScore: { [key: string]: number } = {}
  Object.entries(data).forEach((element) => {
    const { date, score } = element[1]

    if (!maxScore[date] || maxScore[date] < score) {
      maxScore[date] = score
    }
  })

  const score: Array<number> = Object.values(maxScore)
  const date: Array<string> = Object.keys(maxScore)

  return (
    <Paper variant="outlined" sx={{ width: "100%", height: 550 }}>
      <ResponsiveChartContainer
        series={[
          {
            type: "line",
            data: score,
            label: "スコア"
          }
        ]}
        xAxis={[
          {
            scaleType: "point",
            data: date
          }
        ]}
        yAxis={[
          {
            min: 0
          }
        ]}>
        <LinePlot />
        <MarkPlot />
        <ChartsXAxis position="bottom" />
        <ChartsYAxis position="left" />
        <ChartsTooltip />
      </ResponsiveChartContainer>
    </Paper>
  )
}
