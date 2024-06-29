import { ThemeProvider, createTheme, useMediaQuery } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Stack from "@mui/material/Stack";

export default function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Stack direction="column" sx={{ mx: 4 }}>
        <Header />
        <Main />
        <Footer />
      </Stack>
    </ThemeProvider>
  );
}
