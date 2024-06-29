import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function Header() {
  return (
    <Stack direction="column" spacing={3} sx={{ my: 8 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", textAlign: "center" }}>
        寿司打トラッカー
      </Typography>
      <Typography variant="h6" sx={{ textAlign: "center" }}>
        寿司打のタイピングスコアをコース別で追跡し、成長度を可視化する &#x1f680;
      </Typography>
    </Stack>
  );
}
