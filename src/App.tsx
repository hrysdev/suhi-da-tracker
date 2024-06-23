import React from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import ScoreLineChart from "./components/ScoreLineChart";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Stack from "@mui/material/Stack";

// chrome.storage.local.get(null, (result) => {
//   const typingProp: TypingProp[] = Object.values(dummyData);
// });

export default function App() {
  const theme = createTheme({
    palette: {
      background: {
        default: "#f5f5f5",
      },
    },
  });

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Stack direction="column" alignItems="center">
          <Header />
          <ScoreLineChart />
          <Footer />
        </Stack>
      </ThemeProvider>
    </React.Fragment>
  );
}
