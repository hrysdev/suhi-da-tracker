import MaxMissCard from "@components/MaxMissCard"
import MaxRateCard from "@components/MaxRateCard"
import MaxScoreCard from "@components/MaxScoreCard"
import ScoreChart from "@components/ScoreChart"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import Grid from "@mui/material/Grid"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import Typography from "@mui/material/Typography"
import { StrictMode } from "react"

export default function TabPage() {
  const theme = createTheme()

  return (
    <StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Grid container spacing={3} sx={{ px: 8, mb: 4 }}>
          <Grid item xs={4}>
            <MaxScoreCard />
          </Grid>
          <Grid item xs={4}>
            <MaxRateCard />
          </Grid>
          <Grid item xs={4}>
            <MaxMissCard />
          </Grid>
          <Grid item xs={12}>
            <ScoreChart />
          </Grid>
        </Grid>
        <Typography textAlign="center">
          Copyright &copy; 2024 HrysDev.
        </Typography>
        <Button variant="outlined">何故かこれがないと動かない</Button>
      </ThemeProvider>
    </StrictMode>
  )
}
