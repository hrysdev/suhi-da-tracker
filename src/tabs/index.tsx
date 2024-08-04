import DailyMaxScoreChart from "@components/DailyMaxScoreChart"
import ResultLogTable from "@components/ResultLogTable"
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

import "@fontsource/noto-sans-jp/600.css"

export default function TabPage() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Noto Sans JP"].join(",")
    }
  })

  return (
    <StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg" sx={{ mb: 4 }}>
          <AppBar color="transparent" position="static" elevation={0}>
            <Toolbar sx={{ justifyContent: "space-between" }}>
              <Typography variant="h5">寿司打日誌（ver.0.0.1）</Typography>
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                href="https://github.com/hrysdev/suhi-da-tracker"
                target="_blank">
                <GitHubIcon fontSize="large" />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <DailyMaxScoreChart />
            </Grid>
            <Grid item xs={12}>
              <ResultLogTable />
            </Grid>
          </Grid>
        </Container>
        <Typography textAlign="center">&copy; 2024 HrysDev.</Typography>
        <Button sx={{ display: "none" }} />
      </ThemeProvider>
    </StrictMode>
  )
}
