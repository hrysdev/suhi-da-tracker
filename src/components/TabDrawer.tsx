import GitHubIcon from "@mui/icons-material/GitHub"
import HelpIcon from "@mui/icons-material/Help"
import WorkHistoryIcon from "@mui/icons-material/WorkHistory"
import Divider from "@mui/material/Divider"
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"

type TabDrawerProps = {
  open: boolean
  setOpen: (open: boolean) => void
}

const items = [
  { text: "使い方", icon: <HelpIcon />, link: "" },
  { text: "更新履歴", icon: <WorkHistoryIcon />, link: "" },
  { text: "GitHub", icon: <GitHubIcon />, link: "" }
]

export default function TabDrawer({ open, setOpen }: TabDrawerProps) {
  const handleClick = () => {
    setOpen(false)
  }

  return (
    <Drawer open={open} onClose={handleClick}>
      <List sx={{ width: 250 }}>
        {items.map((item, i) => (
          <ListItem key={i} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text}></ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}
