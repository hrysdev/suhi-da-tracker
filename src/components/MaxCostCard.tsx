import useMaxCost from "@hooks/useMaxCost"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"

export default function MaxCostCard() {
  const [maxCost] = useMaxCost()

  return (
    <Card variant="outlined" elevation={0} sx={{ textAlign: "center" }}>
      <CardContent>
        <Typography>ベストスコア（代金）</Typography>
        <Typography display="inline" sx={{ fontSize: 32 }}>
          {maxCost.cost.toLocaleString()}
        </Typography>{" "}
        <Typography display="inline" sx={{ fontSize: 20 }}>
          {"円"}
        </Typography>
        <Typography>{`更新日：${maxCost.date}`}</Typography>
      </CardContent>
    </Card>
  )
}
