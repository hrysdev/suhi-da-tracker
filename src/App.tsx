import React from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import ScoreLineChart from "./components/ScoreLineChart";
import CourseButton from "./components/CourseButton";
import Footer from "./components/Footer";
import Divider from "@mui/material/Divider";

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
        <Divider />
        <ScoreLineChart />
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
}
