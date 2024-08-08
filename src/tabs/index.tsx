import ScoreLogTable from "@components/ScoreLogTable"
import GitHubIcon from "@mui/icons-material/GitHub"
import MenuIcon from "@mui/icons-material/Menu"
import AppBar from "@mui/material/AppBar"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import CssBaseline from "@mui/material/CssBaseline"
import IconButton from "@mui/material/IconButton"
import Menu from "@mui/material/Menu"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import React from "react"

import "@fontsource/noto-sans-jp/600.css"

export default function TabPage() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Noto Sans JP"].join(",")
    }
  })

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar
          color="transparent"
          position="fixed"
          elevation={0}
          sx={{ backdropFilter: "blur(10px)" }}>
          <Container maxWidth="lg" disableGutters>
            <Toolbar>
              <Typography variant="h5" sx={{ flexGrow: 1 }}>
                寿司打ログ（ver 0.0.1）
              </Typography>
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                onClick={handleClick}>
                <MenuIcon fontSize="large" />
              </IconButton>
              <Menu />
            </Toolbar>
          </Container>
        </AppBar>
        <Container maxWidth="lg" sx={{ mt: 8 }}>
          <ScoreLogTable />
          <Typography textAlign="center" sx={{ my: 4 }}>
            &copy; 2024 HrysDev.
          </Typography>
        </Container>
        <Button sx={{ display: "none" }} />
      </ThemeProvider>
    </React.StrictMode>
  )
}
