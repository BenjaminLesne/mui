import { ReactNode } from "react";
import { Box, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { section } from "./styles";

interface SectionItem {
  icon: ReactNode;
  text: string;
}
interface Props {
  data: SectionItem[];
}

export function Section({ data }: Props) {
  return (
    <Box sx={section}>
      {data.map((item: SectionItem) => (
        <ListItemButton key={crypto.randomUUID()}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItemButton>
      ))}
    </Box>
  );
}
