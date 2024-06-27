import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TimelineIcon from "@mui/icons-material/Timeline";

type SidebarProps = {
  open: boolean;
  handleDrawer: (newOpen: boolean) => void;
};

export default function Sidebar({ open, handleDrawer }: SidebarProps) {
  return (
    <Drawer open={open} onClick={() => handleDrawer(false)}>
      <Box sx={{ width: 250 }} role="presentation">
        <List>
          {[
            { text: "Dashboard", icon: <DashboardIcon /> },
            { text: "Log", icon: <TimelineIcon /> },
          ].map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
