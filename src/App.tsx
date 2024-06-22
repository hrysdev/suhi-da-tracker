import React from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import ScoreLineChart from "./components/ScoreLineChart";

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
        <Typography variant="h1">寿司打トラッカー</Typography>
        <ScoreLineChart />
      </ThemeProvider>
    </React.Fragment>
  );
}
