import DailyMaxCostChart from "@components/DailyMaxCostChart"
import MaxCostCard from "@components/MaxCostCard"
import MaxMissCard from "@components/MaxMissCard"
import MaxRateCard from "@components/MaxRateCard"
import GitHubIcon from "@mui/icons-material/GitHub"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import AppBar from "@mui/material/AppBar"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import Grid from "@mui/material/Grid"
import IconButton from "@mui/material/IconButton"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import { StrictMode } from "react"

export default function TabPage() {
  const theme = createTheme()

  return (
    <StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar
          color="inherit"
          position="static"
          elevation={0}
          sx={{ alignItems: "end" }}>
          <Toolbar>
            <IconButton
              href="https://github.com/hrysdev/suhi-da-chart"
              target="_blank">
              <GitHubIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Grid container spacing={3} sx={{ px: 11, mb: 4 }}>
          <Grid item xs={4}>
            <MaxCostCard />
          </Grid>
          <Grid item xs={4}>
            <MaxRateCard />
          </Grid>
          <Grid item xs={4}>
            <MaxMissCard />
          </Grid>
          <Grid item xs={12}>
            <DailyMaxCostChart />
          </Grid>
        </Grid>
        <Typography textAlign="center">
          &copy; 2024 hrysdev@gmail.com
        </Typography>
        <Button variant="outlined">何故かこれがないと動かない</Button>
      </ThemeProvider>
    </StrictMode>
  )
}
