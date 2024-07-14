import useMaxMiss from "@hooks/useMaxMiss"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"

export default function MaxMissCard() {
  const [maxMiss] = useMaxMiss()

  return (
    <Card variant="outlined" elevation={0} sx={{ textAlign: "center" }}>
      <CardContent>
        <Typography>ベストスコア（ミス）</Typography>
        <Typography display="inline" sx={{ fontSize: 32 }}>
          {maxMiss.miss.toLocaleString()}
        </Typography>{" "}
        <Typography display="inline" sx={{ fontSize: 20 }}>
          {"回"}
        </Typography>
        <Typography>{`更新日：${maxMiss.date}`}</Typography>
      </CardContent>
    </Card>
  )
}
