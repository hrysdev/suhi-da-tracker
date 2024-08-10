import GitHubIcon from "@mui/icons-material/GitHub"
import MenuIcon from "@mui/icons-material/Menu"
import AppBar from "@mui/material/AppBar"
import Container from "@mui/material/Container"
import IconButton from "@mui/material/IconButton"
import Menu from "@mui/material/Menu"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import React from "react"

type TabAppBarProps = {
  setOpen: (open: boolean) => void
}

export default function TabAppBar({ setOpen }: TabAppBarProps) {
  const handleClick = () => {
    setOpen(true)
  }

  return (
    <AppBar
      color="transparent"
      position="fixed"
      elevation={0}
      sx={{ backdropFilter: "blur(8px)" }}>
      <Container maxWidth="lg" disableGutters>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClick}
            sx={{ mr: 2 }}>
            <MenuIcon fontSize="large" />
          </IconButton>
          <Typography variant="h6">寿司打ログ（ver 0.0.1）</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
