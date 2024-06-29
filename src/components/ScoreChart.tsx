import Paper from "@mui/material/Paper";
import { ResponsiveChartContainer } from "@mui/x-charts";
import { ChartsXAxis } from "@mui/x-charts/ChartsXAxis";
import { ChartsYAxis } from "@mui/x-charts/ChartsYAxis";
import { LinePlot, MarkPlot } from "@mui/x-charts/LineChart";

import { data } from "./Data";

const DAYS = 7;

// TODO: 難易度別にグラフを切り替えるために、useStateで状態を管理する。
export default function ScoreChart() {
  const typingOverPayment: Array<number> = Object.values(data)
    .map((item) => item.typingOverPayment)
    .slice(-DAYS);
  const typingDate: Array<string> = Object.values(data)
    .map((item) => item.typingDate)
    .slice(-DAYS);

  return (
    <Paper variant="outlined" sx={{ width: "100%", height: 550 }}>
      <ResponsiveChartContainer
        series={[
          {
            type: "line",
            data: typingOverPayment,
          },
        ]}
        xAxis={[
          {
            scaleType: "point",
            data: typingDate,
          },
        ]}
      >
        <LinePlot />
        <MarkPlot />
        <ChartsXAxis label="x　axis" position="bottom" />
        <ChartsYAxis label="y axis" position="left" />
      </ResponsiveChartContainer>
    </Paper>
  );
}
