import useFetchScore from "@hooks/useFetchScore"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import {
  AreaPlot,
  ChartsTooltip,
  ChartsXAxis,
  ChartsYAxis,
  LinePlot,
  MarkPlot,
  ResponsiveChartContainer
} from "@mui/x-charts"

const MAX_COST = 100000

export default function DailyMaxCostChart() {
  const [score] = useFetchScore()

  // 日付をKeyとして、最大スコアをValueとするオブジェクトを作成
  const maxScore: { [key: string]: number } = {}
  Object.entries(score).forEach((element) => {
    const { date, cost } = element[1]

    if (!maxScore[date] || maxScore[date] < cost) {
      maxScore[date] = Math.min(MAX_COST, cost)
    }
  })

  return (
    <Paper variant="outlined" sx={{ width: "100%", height: 500, px: 4, py: 4 }}>
      <Typography variant="h6">過去30日のベストスコア推移</Typography>
      <ResponsiveChartContainer
        series={[
          {
            type: "line",
            data: Object.values(maxScore),
            label: "ベストスコア",
            area: true
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
        <AreaPlot />
        <ChartsTooltip />
        <ChartsXAxis position="bottom" />
        <ChartsYAxis position="left" />
        <LinePlot />
        <MarkPlot />
      </ResponsiveChartContainer>
    </Paper>
  )
}
