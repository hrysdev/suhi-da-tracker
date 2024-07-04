import { ThemeProvider, createTheme, useMediaQuery } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import Footer from "./components/Footer";
// import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";

export default function App() {
  // const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const prefersDarkMode = false;

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
      <Nav />
      {/* <Header /> */}
      <Main />
      <Footer />
    </ThemeProvider>
  );
}
