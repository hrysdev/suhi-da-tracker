import ScoreChart from "@components/ScoreChart"
import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
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
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Card variant="outlined">
              <Typography>4,000</Typography>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card variant="outlined">
              <Typography>4,000</Typography>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card variant="outlined">
              <Typography>4,000</Typography>
            </Card>
          </Grid>
        </Grid>
        <ScoreChart />
        <Button variant="outlined">何故かこれがないと動かない</Button>
      </ThemeProvider>
    </StrictMode>
  )
}
