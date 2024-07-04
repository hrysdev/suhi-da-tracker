import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function ScoreCard() {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          最高記録
        </Typography>
        <Typography variant="h4">5000</Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          2024/01/01
        </Typography>
      </CardContent>
    </Card>
  );
}
