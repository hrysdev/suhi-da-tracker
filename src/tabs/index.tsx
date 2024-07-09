import ScoreCard from "@components/ScoreCard"
import ScoreChart from "@components/ScoreChart"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import Grid from "@mui/material/Grid"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { StrictMode } from "react"

export default function TabPage() {
  const theme = createTheme()

  return (
    <StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Grid container spacing={3} sx={{ px: 11 }}>
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
        <Button variant="outlined">何故かこれがないと動かない</Button>
      </ThemeProvider>
    </StrictMode>
  )
}
