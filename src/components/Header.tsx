import { ThemeProvider, createTheme } from "@mui/material";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";

export default function Header() {
  const theme = createTheme({
    palette: {
      primary: {
        main: grey[200],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Stack
        direction="column"
        spacing={2}
        alignItems="center"
        sx={{ py: 8, backgroundColor: theme.palette.primary.main }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          寿司打トラッカー　ver 0.0.1
        </Typography>
        <Typography variant="h6">
          寿司打のタイピングスコアをコース別で追跡し、成長を可視化する &#x1f680;
        </Typography>
      </Stack>
      <Divider />
    </ThemeProvider>
  );
}
