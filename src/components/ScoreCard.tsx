import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"

// TODO: ResultTypeごとに表示内容を変える
// 今のところ、スコア・レート・タイポの３種類を想定
export default function ScoreCard() {
  return (
    <Card variant="outlined" elevation={0}>
      <CardContent>
        <Typography>最高記録</Typography>
        <Typography variant="h4">2,000</Typography>
        <Typography>24/01/01</Typography>
      </CardContent>
    </Card>
  )
}
