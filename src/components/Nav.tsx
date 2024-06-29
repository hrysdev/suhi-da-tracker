import GitHubIcon from "@mui/icons-material/GitHub";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";

export default function Nav() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large">
            <GitHubIcon />
          </IconButton>
          <IconButton size="large" edge="end">
            <MoreVertIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
