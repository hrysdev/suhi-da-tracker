import Grid from "@mui/material/Grid";
import ScoreCard from "./ScoreCard";
import ScoreChart from "./ScoreChart";

export default function Main() {
  return (
    <Grid container spacing={4} sx={{ px: 12, mb: 4 }}>
      <Grid item xs={4}>
        <ScoreCard />
      </Grid>
      <Grid item xs={4}>
        <ScoreCard />
      </Grid>
      <Grid item xs={4}>
        <ScoreCard />
      </Grid>
      <Grid item xs={12}>
        <ScoreChart />
      </Grid>
    </Grid>
  );
}
