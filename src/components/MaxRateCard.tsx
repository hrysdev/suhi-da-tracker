import useMaxRate from "@hooks/useMaxRate"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"

export default function MaxRateCard() {
  const [maxRate] = useMaxRate()

  return (
    <Card variant="outlined" elevation={0} sx={{ textAlign: "center" }}>
      <CardContent>
        <Typography>ベストスコア（速度）</Typography>
        <Typography display="inline" sx={{ fontSize: 32 }}>
          {maxRate.rate}
        </Typography>{" "}
        <Typography display="inline" sx={{ fontSize: 20 }}>
          {"回/秒"}
        </Typography>
        <Typography>{`更新日：${maxRate.date}`}</Typography>
      </CardContent>
    </Card>
  )
}
