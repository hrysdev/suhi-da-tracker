import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";

export default function Footer() {
  return (
    <Stack direction="column" alignItems="center">
      <IconButton href="https://github.com/hrysdev/sushi-da-tracker">
        <GitHubIcon />
      </IconButton>
      <Typography>Copyright &copy; 2024 HrysDev.</Typography>
    </Stack>
  );
}
