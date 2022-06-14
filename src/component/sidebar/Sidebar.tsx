import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

export default function Sidebar() {
  return (
    <Box sx={{ width: "100%", maxWidth: "360", bgcolor: "background.paper" }}>
      <nav>
        <List>
          <ListItemButton>
            <ListItemText>hello world</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemText>hello world</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemText>hello world</ListItemText>
          </ListItemButton>
        </List>
      </nav>
    </Box>
  );
}
