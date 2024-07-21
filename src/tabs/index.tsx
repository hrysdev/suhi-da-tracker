import DailyMaxCostChart from "@components/DailyMaxCostChart"
import MaxCostCard from "@components/MaxCostCard"
import MaxMissCard from "@components/MaxMissCard"
import MaxRateCard from "@components/MaxRateCard"
import GitHubIcon from "@mui/icons-material/GitHub"
import AppBar from "@mui/material/AppBar"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
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
              size="large"
              color="inherit"
              href="https://github.com/hrysdev/suhi-da-chart"
              target="_blank">
              <GitHubIcon fontSize="large" />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Container maxWidth="md">
          <Grid container spacing={4}>
            <Grid item xs={6}></Grid>
            <Grid item xs={6}>
              <MaxCostCard />
            </Grid>
            <Grid item xs={12}>
              <DailyMaxCostChart />
            </Grid>
          </Grid>
          <Typography textAlign="center">
            &copy; 2024 hrysdev@gmail.com
          </Typography>
        </Container>
      </ThemeProvider>
    </StrictMode>
  )
}
