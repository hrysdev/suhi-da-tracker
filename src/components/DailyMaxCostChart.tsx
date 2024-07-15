import useFetchScore from "@hooks/useFetchScore"
import Paper from "@mui/material/Paper"
import {
  ChartsTooltip,
  ChartsXAxis,
  ChartsYAxis,
  LinePlot,
  MarkPlot,
  ResponsiveChartContainer
} from "@mui/x-charts"

export default function DailyMaxCostChart() {
  const [score] = useFetchScore()

  // 日付をKeyとして、最大スコアをValueとするオブジェクトを作成
  const maxScore: { [key: string]: number } = {}
  Object.entries(score).forEach((element) => {
    const { date, cost } = element[1]

    if (!maxScore[date] || maxScore[date] < cost) {
      maxScore[date] = cost
    }
  })

  return (
    <Paper variant="outlined" sx={{ width: "100%", height: 550 }}>
      <ResponsiveChartContainer
        series={[
          {
            type: "line",
            data: Object.values(maxScore),
            label: "スコア"
          }
        ]}
        xAxis={[
          {
            scaleType: "point",
            data: Object.keys(maxScore)
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
