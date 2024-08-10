import ScoreLogTable from "@components/ScoreLogTable"
import TabAppBar from "@components/TabAppBar"
import TabDrawer from "@components/TabDrawer"
import Button from "@mui/material/Button"
import { grey } from "@mui/material/colors"
import Container from "@mui/material/Container"
import CssBaseline from "@mui/material/CssBaseline"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import Typography from "@mui/material/Typography"
import { StrictMode, useState } from "react"

import "@fontsource/noto-sans-jp/600.css"

export default function TabPage() {
  const [open, setOpen] = useState(false)

  const theme = createTheme({
    palette: {
      background: {
        default: grey[50]
      }
    },
    typography: {
      fontFamily: ["Noto Sans JP"].join(",")
    }
  })

  return (
    <StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <TabAppBar setOpen={setOpen} />
        <TabDrawer open={open} setOpen={setOpen} />
        <Container maxWidth="lg" sx={{ mt: 9 }}>
          <ScoreLogTable />
          <Typography textAlign="center" sx={{ my: 4 }}>
            &copy; 2024 HrysDev.
          </Typography>
        </Container>
        <Button sx={{ display: "none" }} />
      </ThemeProvider>
    </StrictMode>
  )
}
