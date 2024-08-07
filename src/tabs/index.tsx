import DailyMaxScoreChart from "@components/DailyMaxScoreChart"
import ScoreLogTable from "@components/ScoreLogTable"
import GitHubIcon from "@mui/icons-material/GitHub"
import AppBar from "@mui/material/AppBar"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import CssBaseline from "@mui/material/CssBaseline"
import IconButton from "@mui/material/IconButton"
import Stack from "@mui/material/Stack"
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
        <AppBar color="transparent" position="static" elevation={0}>
          <Container maxWidth="lg" disableGutters>
            <Toolbar sx={{ justifyContent: "space-between" }}>
              <Typography variant="h5">寿司打トラッカー</Typography>
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                href="https://github.com/hrysdev/suhi-da-tracker"
                target="_blank">
                <GitHubIcon fontSize="large" />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
        <Container maxWidth="lg">
          <Stack direction="column" spacing={3}>
            <DailyMaxScoreChart />
            <ScoreLogTable />
          </Stack>
        </Container>
        <Typography textAlign="center" sx={{ my: 4 }}>
          &copy; 2024 HrysDev.
        </Typography>
        <Button sx={{ display: "none" }} />
      </ThemeProvider>
    </StrictMode>
  )
}
