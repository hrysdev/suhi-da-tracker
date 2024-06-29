import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ScoreChart from "./ScoreChart";

export default function Main() {
  return (
    <Box>
      <Stack direction="row" spacing={3} justifyContent="center" sx={{ mb: 4 }}>
        {[
          "お手軽3,000円コース",
          "お勧め5,000円コース",
          "高級10,000円コース",
        ].map((course, index) => (
          <Button key={index} variant="outlined">
            {course}
          </Button>
        ))}
      </Stack>
      <ScoreChart />
    </Box>
  );
}
