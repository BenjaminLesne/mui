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

interface Props {
  data: {
    [key: string]: string | number | [];
  };
}

export const Hero = ({ data }: Props) => {
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
          {data.firstName + " " + data.lastName}
        </ListSubheader>
        <ListItem disablePadding>
          <ListItemText primary={data.email} sx={listItem} />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary={data.phoneNumber} sx={listItem} />
        </ListItem>
      </List>
    </Box>
  );
};
