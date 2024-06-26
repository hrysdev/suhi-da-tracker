import React from "react";
import { useMediaQuery, createTheme, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import ScoreLineChart from "./components/ScoreLineChart";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Stack from "@mui/material/Stack";

// chrome.storage.local.get(null, (result) => {
//   const typingProp: TypingProp[] = Object.values(dummyData);
// });

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
      <Stack direction="column" alignItems="center">
        <Header />
        <ScoreLineChart />
        <Footer />
      </Stack>
    </ThemeProvider>
  );
}
