import GitHubIcon from "@mui/icons-material/GitHub";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";

export default function Nav() {
  return (
    <AppBar elevation={0} color="transparent">
      <Toolbar>
        <IconButton size="large" edge="end">
          <GitHubIcon fontSize="large" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
