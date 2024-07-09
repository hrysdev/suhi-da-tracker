import Paper from "@mui/material/Paper"
import {
  ChartsXAxis,
  ChartsYAxis,
  LinePlot,
  MarkPlot,
  ResponsiveChartContainer
} from "@mui/x-charts"

import { data } from "../data"

export default function ScoreChart() {
  const score: Array<number> = Object.values(data)
    .map((item) => item.score)
    .slice(-7)
  const date: Array<string> = Object.values(data)
    .map((item) => item.date)
    .slice(-7)

  return (
    <Paper variant="outlined" sx={{ width: "100%", height: 500 }}>
      <ResponsiveChartContainer
        series={[
          {
            type: "line",
            data: score
          }
        ]}
        xAxis={[
          {
            scaleType: "point",
            data: date
          }
        ]}>
        <LinePlot />
        <MarkPlot />
        <ChartsXAxis position="bottom" />
        <ChartsYAxis position="left" />
      </ResponsiveChartContainer>
    </Paper>
  )
}
