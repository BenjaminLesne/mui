import { Dispatch, ReactNode, SetStateAction } from "react";
import { Box, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { section } from "./styles";

interface SectionItem {
  icon: ReactNode;
  text: string;
  id: number;
}
interface Props {
  data: SectionItem[];
  selectedId: null | number;
  setSelectedId: Dispatch<SetStateAction<null | number>>;
  isDesktop: boolean;
}

export function Section({ data, selectedId, setSelectedId, isDesktop }: Props) {
  return (
    <Box sx={section}>
      {data.map((item: SectionItem) => (
        <ListItemButton
          key={crypto.randomUUID()}
          selected={selectedId === item.id}
          onClick={() => {
            setSelectedId(item.id);
            if (isDesktop === false) window.scrollTo(0, 0);
          }}
        >
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItemButton>
      ))}
    </Box>
  );
}
