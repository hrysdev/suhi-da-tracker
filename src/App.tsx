import CssBaseline from "@mui/material/CssBaseline";
import OverPaymentLineChart from "./components/OverPaymentLineChart";

// chrome.storage.local.get(null, (result) => {
//   const typingProp: TypingProp[] = Object.values(dummyData);
// });

export default function App() {
  return (
    <>
      <CssBaseline />
      <OverPaymentLineChart />
      {/* <footer>© 2024 HrysDev.</footer> */}
    </>
  );
}
