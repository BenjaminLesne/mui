import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemText,
  Badge,
  ListSubheader,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

import { badge, hero, avatar, listItem, username } from "./styles";
import Benjamin from "../../../assets/benjamin.jpg";

export const Hero = () => {
  return (
    <Box sx={hero}>
      <Badge
        badgeContent={<EditIcon />}
        color="secondary"
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        sx={badge}
      >
        <Avatar alt="Benjamin Lesné" src={Benjamin} sx={avatar} />
      </Badge>
      <List disablePadding>
        <ListSubheader sx={{ ...listItem, ...username }}>
          Benjamin Lesné
        </ListSubheader>
        <ListItem disablePadding>
          <ListItemText primary="benjamin.lesne@outlook.fr" sx={listItem} />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary="0616285335" sx={listItem} />
        </ListItem>
      </List>
    </Box>
  );
};
