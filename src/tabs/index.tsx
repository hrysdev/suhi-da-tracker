import DailyMaxScoreChart from "@components/DailyMaxScoreChart"
import ResultLogTable from "@components/ResultLogTable"
import GitHubIcon from "@mui/icons-material/GitHub"
import AppBar from "@mui/material/AppBar"
import Button from "@mui/material/Button"
import Chip from "@mui/material/Chip"
import Container from "@mui/material/Container"
import CssBaseline from "@mui/material/CssBaseline"
import Grid from "@mui/material/Grid"
import IconButton from "@mui/material/IconButton"
import Stack from "@mui/material/Stack"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import { StrictMode } from "react"

export default function TabPage() {
  const theme = createTheme()

  const handleClick = () => {
    console.log("Chip Clicked")
  }

  return (
    <StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
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
        {/* <Stack direction="row" spacing={2}>
          <Chip
            label="3,000円コース"
            color="primary"
            onClick={handleClick}
            clickable
          />
          <Chip label="5,000円コース" color="primary" clickable />
          <Chip label="10,000円コース" color="primary" clickable />
        </Stack> */}
        <Container maxWidth="md" sx={{ mb: 4 }}>
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
