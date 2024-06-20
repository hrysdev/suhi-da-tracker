import { LineChart, Line } from "recharts";
import ButtonAppBar from "./components/ButtonAppBar";
import PersistentDrawerLeft from "./components/PersistentDrawer";

const dummyData = {
  1: {
    typingCourse: "5000",
    typingOverPayment: "3000",
    typingRate: "4.1",
    typingDate: "2024-01-01",
  },
  2: {
    typingCourse: "5000",
    typingOverPayment: "3200",
    typingRate: "4.2",
    typingDate: "2024-01-02",
  },
  3: {
    typingCourse: "5000",
    typingOverPayment: "3500",
    typingRate: "4.3",
    typingDate: "2024-01-03",
  },
  4: {
    typingCourse: "5000",
    typingOverPayment: "3900",
    typingRate: "4.4",
    typingDate: "2024-01-04",
  },
  5: {
    typingCourse: "5000",
    typingOverPayment: "4400",
    typingRate: "4.5",
    typingDate: "2024-01-05",
  },
  6: {
    typingCourse: "5000",
    typingOverPayment: "5000",
    typingRate: "4.1",
    typingDate: "2024-01-06",
  },
  7: {
    typingCourse: "5000",
    typingOverPayment: "10000",
    typingRate: "4.2",
    typingDate: "2024-01-07",
  },
};

type TypingProp = {
  typingCourse: string;
  typingOverPayment: string;
  typingRate: string;
  typingDate: string;
};

// chrome.storage.local.get(null, (result) => {
//   const typingProp: TypingProp[] = Object.values(dummyData);
// });

const typingProp: TypingProp[] = Object.values(dummyData);

export default function App() {
  return (
    <>
      <ButtonAppBar />
      <PersistentDrawerLeft />
      <LineChart width={400} height={400} data={typingProp}>
        <Line type="monotone" dataKey="typingOverPayment" stroke="#8884d8" />
      </LineChart>
      <footer>© 2024 HrysDev.</footer>
    </>
  );
}
