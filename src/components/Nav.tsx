import GitHubIcon from "@mui/icons-material/GitHub";
import MenuIcon from "@mui/icons-material/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Nav() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" sx={{ flexGrow: 1 }}>
            寿司打トラッカー
          </Typography>
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
