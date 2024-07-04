import Paper from "@mui/material/Paper";
import { ResponsiveChartContainer } from "@mui/x-charts";
import { ChartsXAxis } from "@mui/x-charts/ChartsXAxis";
import { ChartsYAxis } from "@mui/x-charts/ChartsYAxis";
import { LinePlot, MarkPlot } from "@mui/x-charts/LineChart";

import { data } from "./Data";

const days = 7;

// TODO: 難易度別にグラフを切り替えるために、useStateで状態を管理する。
export default function ScoreChart() {
  const score: Array<number> = Object.values(data)
    .map((item) => item.score)
    .slice(-days);
  const date: Array<string> = Object.values(data)
    .map((item) => item.date)
    .slice(-days);

  return (
    <Paper variant="outlined" sx={{ width: "100%", height: 500 }}>
      <ResponsiveChartContainer
        series={[
          {
            type: "line",
            data: score,
          },
        ]}
        xAxis={[
          {
            scaleType: "point",
            data: date,
          },
        ]}
      >
        <LinePlot />
        <MarkPlot />
        <ChartsXAxis position="bottom" />
        <ChartsYAxis position="left" />
      </ResponsiveChartContainer>
    </Paper>
  );
}
