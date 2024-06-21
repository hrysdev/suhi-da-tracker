import { Box } from "@mui/material";
import { LineChart } from "@mui/x-charts";

const data = {
  1: {
    typingCourse: 5000,
    typingOverPayment: 3000,
    typingRate: 4.1,
    typingDate: "2024-01-01",
  },
  2: {
    typingCourse: 5000,
    typingOverPayment: 3200,
    typingRate: 4.2,
    typingDate: "2024-01-02",
  },
  3: {
    typingCourse: 5000,
    typingOverPayment: 3500,
    typingRate: 4.3,
    typingDate: "2024-01-03",
  },
  4: {
    typingCourse: 5000,
    typingOverPayment: 3900,
    typingRate: 4.4,
    typingDate: "2024-01-04",
  },
  5: {
    typingCourse: 5000,
    typingOverPayment: 4400,
    typingRate: 4.5,
    typingDate: "2024-01-05",
  },
  6: {
    typingCourse: 5000,
    typingOverPayment: 5000,
    typingRate: 4.1,
    typingDate: "2024-01-06",
  },
};

type TypingProp = {
  typingCourse: number;
  typingOverPayment: number;
  typingRate: number;
  typingDate: string;
};

export default function OverPaymentLineChart() {
  const typingProp: TypingProp[] = Object.values(data);

  return (
    <Box sx={{ mx: 1, borderRadius: 1 }}>
      <LineChart
        series={[
          {
            data: typingProp.map((item) => item.typingOverPayment),
          },
        ]}
        width={500}
        height={300}
      />
    </Box>
  );
}
