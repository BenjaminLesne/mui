import { Section } from "./Section";
import { List } from "@mui/material";
import { list } from "./styles";
import { Dispatch } from "react";
import { section1, section2, section3 } from "./data";

interface Props {
  selectedId: null | number;
  setSelectedId: Dispatch<React.SetStateAction<number | null>>;
}

export const Menu = ({ selectedId, setSelectedId }: Props) => {
  return (
    <List component={"nav"} sx={list}>
      <Section
        data={section1}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
      />
      <Section
        data={section2}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
      />
      <Section
        data={section3}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
      />
    </List>
  );
};
